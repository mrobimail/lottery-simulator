<template>
  <div id="result">
    <v-card class="rounded-xl" flat color="primary">
      <v-card-text class="white--text">
        <v-row v-if="youWin">
          <v-col cols="12" class="text-center"><h1>You WIN!</h1></v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="subtitle-1 font-weight-medium pt-1 pb-1">Number of tickets:</v-col>
          <v-col cols="6" class="subtitle-1 font-weight-bold pt-1 pb-1">{{ numberMask(value) }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="pt-1 pb-1">Years spent:</v-col>
          <v-col cols="6" class="pt-1 pb-1" :class="{'black--text font-weight-bold': youWin}">
            {{ numberMask(Math.floor(value / config.lotterySimulator.oneYearInWeeks)) }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="pt-1 pb-1">Coast of tickets:</v-col>
          <v-col cols="6" class="pt-1 pb-1">
            {{ numberMask(value * config.lotterySimulator.ticketPrice) }},- Ft
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'result',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    youWin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
