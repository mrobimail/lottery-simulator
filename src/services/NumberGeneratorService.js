import ValidationService from './ValidationService';

export default class NumberGeneratorService {
  static getRandomNumbers(length) {
    const crypto = window.crypto || window.msCrypto;
    const array = new Uint8Array(length);
    return crypto.getRandomValues(array);
  }

  static getLotteryNumbers(config) {
    const randomNumbers = this.getRandomNumbers(65536);
    const validNumbers = [];
    randomNumbers.forEach((number) => {
      if (number >= config.number.minValue && number <= config.number.maxValue) {
        validNumbers.push(number);
      }
    });

    const lotteryNumbers = [];
    for (let i = 0; i < validNumbers.length; i += config.numberOfNumbers) {
      const lotteryNumbersItem = validNumbers.slice(i, i + config.numberOfNumbers);
      if (!ValidationService.isDuplicatedNumber(lotteryNumbersItem)
        && lotteryNumbersItem.length === config.numberOfNumbers) {
        lotteryNumbers.push(lotteryNumbersItem);
      }
    }

    return lotteryNumbers;
  }
}
