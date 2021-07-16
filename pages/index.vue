<template>
  <v-row justify="center" align="center" class="my-10">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline font-weight-black justify-center">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text v-for="post in posts" :key="post.id">
          <h4 class="font-weight-bold" v-text="post.completed"></h4>
          <p>{{ post.title }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <div>
            <v-tooltip v-if="!$vuetify.theme.dark" bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" color="info" small fab @click="darkMode">
                  <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
                </v-btn>
              </template>
              <span>Dark Mode On</span>
            </v-tooltip>

            <v-tooltip v-else bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" color="info" small fab @click="darkMode">
                  <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
                </v-btn>
              </template>
              <span>Dark Mode Off</span>
            </v-tooltip>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
const chalk = require("chalk");

export default {
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  },
  async asyncData({ $axios }) {
    console.log(chalk.keyword("orange")("I am captain now"));

    try {
      const posts = await $axios.$get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return { posts };
    } catch (error) {
      console.error(`error`, error);
      return { posts: [] };
    }
  }
};
</script>
