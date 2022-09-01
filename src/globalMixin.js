export default {
  data() {
    return {
      config: {
        lotterySimulator: {
          numberOfNumbers: 5,
          number: {
            minValue: 1,
            maxValue: 90,
          },
          ticketPrice: 300,
          oneYearInWeeks: 52,
        },
      },
    };
  },
  methods: {
    numberMask(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
  },
};
