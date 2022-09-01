<template>
  <div id="matches">
    <v-card class="d-flex d-inline-flex flex-row elevation-2" flat tile>
      <template v-for="(n, index) in 6">
        <v-card :key="n" v-if="index >= 2" outlined tile class="pa-4 text-center">
          <p class="caption mb-2 font-weight-bold blue--text text--darken-4">{{ index }} matches</p>
          <p class="subtitle-2 font-weight-bold blue--text text--darken-4 mb-0">{{ value[index] }}</p>
        </v-card>
      </template>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'matches',
  props: {
    value: {
      type: Array,
      default: null,
    },
  },
};
</script>
