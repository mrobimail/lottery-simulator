export default class ValidationService {
  static isValidLotteryNumbers(lotteryNumbers) {
    let isValid = true;

    if (Array.isArray(lotteryNumbers) && lotteryNumbers.length === 5) {
      for (let i = 0; i < lotteryNumbers.length; i += 1) {
        if (!this.isValidNumber(lotteryNumbers[i], lotteryNumbers)) {
          isValid = false;
          break;
        }
      }
    } else {
      isValid = false;
    }

    return isValid;
  }

  static isValidNumber(number, lotteryNumbers = []) {
    let isValid = true;
    if (typeof (number) !== 'number') {
      isValid = false;
    } else if (!(number >= 1 && number <= 90)) {
      isValid = false;
    } else if (this.isDuplicatedNumber(lotteryNumbers)) {
      isValid = false;
    }
    return isValid;
  }

  static isDuplicatedNumber(numbersArray = []) {
    let isDuplicated = true;
    const findDuplicated = numbersArray.filter(
      (item, index) => numbersArray.indexOf(item) !== index,
    );
    if (findDuplicated.length === 0) {
      isDuplicated = false;
    }
    return isDuplicated;
  }
}
