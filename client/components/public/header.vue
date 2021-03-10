<template>
  <div>
    <v-app-bar
      height="72"
      elevate-on-scroll
      app
      flat
      absolute
      color="gray lighten-3"
      :scroll-target="target"
    >
      <v-toolbar-title>
        <router-link to="/">
          <v-img
            class="mt-2 mb-2"
            src="/images/pathLogo.png"
            max-height="120"
            max-width="230"
            contain
          ></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg">
        <v-btn @click="homeEvent" plain>home</v-btn>
        <v-btn plain>contact</v-btn>
        <v-btn plain>privacy policy</v-btn>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg"
        dark
        large
        depressed
        @click="comingSoon"
        color="red lighten-1"
        class="mr-8 font-weight-bold text-subtitle-1"
        >submit MCQ's ?</v-btn
      >
    </v-app-bar>

    <!-- SNACKBAR -->
    <v-snackbar dark color="grey darken-3" v-model="snackbar" timeout="2000">
      Coming Soon

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- NAV DRAWER -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="red--text text--accent-4">
          <v-list-item @click="navBarHomeEvent">
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>phone_in_talk</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>security</v-icon>
            </v-list-item-icon>
            <v-list-item-title>privacy policy</v-list-item-title>
          </v-list-item>
          <v-divider class="mt-1 mb-1"></v-divider>
          <v-list-item @click="comingSoon">
            <v-list-item-icon>
              <v-icon>question_answer</v-icon>
            </v-list-item-icon>
            <v-list-item-title>submit MCQ's ?</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snackbar: false,
      drawer: false
    };
  },
  computed: {
    currentMode: {
      get() {
        return this.$store.state.mode.currentMode;
      },
      set(currentMode) {
        this.$store.commit("mode/SET_CURRENTMODE", currentMode);
      }
    },
    target: {
      get() {
        return this.$store.state.scroll.target;
      },
      set(target) {
        this.$store.commit("auth/SET_TARGET", target);
      }
    }
  },
  methods: {
    navBarHomeEvent() {
      this.$router.push("/");
      this.drawer = false;
    },
    homeEvent() {
      this.$router.push("/");
    },
    comingSoon() {
      this.snackbar = true;
      this.drawer = false;
    }
  }
};
</script>
