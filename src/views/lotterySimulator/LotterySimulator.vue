<template>
  <div id="lotterySimulator">
    <v-card class="rounded-xl mb-4">
      <v-card-text>
        <h1 class="mt-2 mb-4">Result</h1>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="4" xl="4">
            <Result v-model="iteratorsNumber" :youWin="youWin" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <Matches v-model="match" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" sm="6" md="6" lg="5" xl="5">
            <p class="subtitle-1 font-weight-medium">Winning numbers:</p>
          </v-col>
          <v-col cols="8" sm="6" md="6" lg="5" xl="5">
            <LotteryNumbers v-model="winningNumbers" readonly />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" sm="6" md="6" lg="5" xl="5">
            <p class="subtitle-1 font-weight-medium">Your numbers:</p>
          </v-col>
          <v-col cols="8" sm="6" md="6" lg="5" xl="5">
            <LotteryNumbers v-model="yourNumbers" :readonly="playWithRandomNumbers" />
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="2" xl="2">
            <v-btn
              v-if="!playWithRandomNumbers && !inProgress"
              color="primary"
              @click="start"
            >Start</v-btn>
            <v-btn
              v-if="!playWithRandomNumbers && inProgress"
              @click="inProgress = false"
            >STOP</v-btn>
            <p
              v-if="!playWithRandomNumbers && errorMessage"
              class="error--text mt-2"
            >Invalid lottery numbers</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" sm="6" md="6" lg="5" xl="5">
            <p class="subtitle-1 font-weight-medium">Play with random numbers:</p>
          </v-col>
          <v-col cols="8" sm="6" md="6" lg="5" xl="5">
            <v-checkbox v-model="playWithRandomNumbers" class="ma-0" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <p class="subtitle-1 font-weight-medium">Speed</p>
            <v-slider v-model="speed" min="1" max="1000" track-color="grey lighten-1" thumb-label />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ValidationService from '../../services/ValidationService';
import NumberGeneratorService from '../../services/NumberGeneratorService';

export default {
  name: 'lotterySimulator',
  data() {
    return {
      winningNumbers: null,
      yourNumbers: null,
      randomLotteryNumbers: {
        winningNumbers: [],
        yourNumbers: [],
      },
      inProgress: false,
      playWithRandomNumbers: false,
      match: [0, 0, 0, 0, 0, 0],
      speed: 500,
      iteratorsNumber: 0,
      youWin: false,
      errorMessage: false,
    };
  },
  watch: {
    inProgress() {
      if (this.inProgress) {
        this.playInProgress();
      } else {
        this.errorMessage = false;
      }
    },

    playWithRandomNumbers() {
      this.inProgress = this.playWithRandomNumbers;
    },

    youWin() {
      if (this.youWin) {
        this.playWithRandomNumbers = false;
        this.inProgress = false;
      }
    },
  },
  created() {
    this.getWinningNumbers();
    this.getYourNumbers();
  },
  methods: {
    start() {
      if (ValidationService.isValidLotteryNumbers(this.yourNumbers)) {
        this.inProgress = true;
        this.errorMessage = false;
      } else {
        this.errorMessage = true;
      }
    },
    playInProgress() {
      if (this.inProgress) {
        this.setYourNumbers();
        this.setWinningNumbers();
        this.howManyMatch(this.yourNumbers, this.winningNumbers);

        this.iteratorsNumber += 1;
        setTimeout(() => {
          this.playInProgress();
        }, this.speed);
      }
    },
    setWinningNumbers() {
      this.winningNumbers = this.randomLotteryNumbers.winningNumbers[this.iteratorsNumber];
      if (this.iteratorsNumber > (this.randomLotteryNumbers.winningNumbers.length - 1000)) {
        this.getWinningNumbers();
      }
    },
    setYourNumbers() {
      if (this.playWithRandomNumbers) {
        this.yourNumbers = this.randomLotteryNumbers.yourNumbers[this.iteratorsNumber];
      }
      if (this.iteratorsNumber > (this.randomLotteryNumbers.yourNumbers.length - 1000)) {
        this.getYourNumbers();
      }
    },
    getWinningNumbers() {
      this.randomLotteryNumbers.winningNumbers = this.randomLotteryNumbers.winningNumbers
        .concat(NumberGeneratorService.getLotteryNumbers(this.config.lotterySimulator));
    },
    getYourNumbers() {
      this.randomLotteryNumbers.yourNumbers = this.randomLotteryNumbers.yourNumbers
        .concat(NumberGeneratorService.getLotteryNumbers(this.config.lotterySimulator));
    },
    howManyMatch(yourNumbers, winningNumbers) {
      const match = yourNumbers.filter((n) => (
        winningNumbers.includes(n)
      ));
      if (match.length === 5) {
        this.youWin = true;
      }
      this.$set(this.match, match.length, this.match[match.length] + 1);
    },
  },
};
</script>
