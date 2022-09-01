<template>
  <div id="lotteryNumbers">
    <v-card class="d-flex flex-row" flat>
      <v-card v-for="n in 5" :key="n" class="pl-2" flat>
        <v-text-field
          :name="'number' + n"
          autocomplete="off"
          v-model.number="numberValue[n - 1]"
          @input="updateValue"
          dense
          outlined
          single-line
          :readonly="readonly"
        />
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LotteryNumbers',
  data() {
    return {
      numberValue: [],
    };
  },
  watch: {
    value() {
      this.init();
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      if (this.value !== null) {
        this.numberValue = this.value;
      }
    },
    updateValue() {
      this.$emit('input', this.numberValue);
    },
  },
  props: {
    value: {
      type: Array,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
