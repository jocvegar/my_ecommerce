<template>
  <v-app id="home">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-toolbar-title style="width: 350px">
        <nuxt-link
          to="/"
          class="white--text d-flex align-end"
          style="text-decoration: none"
        >
          <v-img
            class="mx-2"
            src="/dj.png"
            max-height="40"
            max-width="40"
            contain
          ></v-img>
          <v-toolbar-title class="ml-2 d-none d-sm-flex">
            Party JoC
          </v-toolbar-title>
        </nuxt-link>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />

      <span class="d-none d-sm-flex">
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
      </span>

      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

      <v-btn v-on="on" icon>
        <v-badge content="2" value="2" color="green" overlap>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn v-on="on" href="/cart" icon>
        <v-badge
          :content="cartItemsCount"
          :value="cartItemsCount"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-bottom-navigation
        :value="activeBtn"
        color="primary"
        horizontal
        class="justify-start justify-sm-center"
      >
        <v-btn class="reset-button">
          <n-link to="/" class="text-decoration-none">
            HOLA
          </n-link>
        </v-btn>

        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn class="reset-button" v-on="on">
              Shop
            </v-btn>
          </template>

          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item v-for="(item, index) in items" :key="index" to="/shop">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu>

        <v-btn class="reset-button">
          <n-link to="/product" class="text-decoration-none">
            Product
          </n-link>
        </v-btn>

        <v-btn class="reset-button">
          <n-link to="/blog" class="text-decoration-none">
            Blog
          </n-link>
        </v-btn>

        <v-btn class="reset-button">
          <n-link to="/blog" class="text-decoration-none">
            Blog $1
          </n-link>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
    <router-view />
    <Footer />
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import Footer from "@/components/Footer.vue";

export default {
  props: ["on"],
  components: { Footer },
  computed: {
    ...mapGetters("cart", ["cartItemsCount"])
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  },
  data() {
    return {
      items: [
        { title: "T-Shirts" },
        { title: "Jackets" },
        { title: "Shirts" },
        { title: "Jeans" },
        { title: "Shoes" }
      ],
      activeBtn: 1
    };
  }
};
</script>

<style>
.v-bottom-navigation {
  overflow-x: scroll;
}
.reset-button {
  height: 100% !important;
  background: white !important;
}
.theme--dark.v-btn.v-btn--has-bg {
  background-color: #272727 !important;
}
#home {
  overflow-x: hidden !important;
}
</style>
