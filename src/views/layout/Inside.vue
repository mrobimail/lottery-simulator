<template>
  <v-app id="inspire">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="green lighten-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-0">
        <v-btn text class="text-capitalize title no-active" to="/">Lottery Simulator</v-btn>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import Vuetify from 'vuetify';

export default {
  name: 'Inside',
  vuetify: new Vuetify(),
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
