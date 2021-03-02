<template>
  <v-main class=" mt-5 indigo lighten-5">
    <v-row class="mt-5">
      <v-col align="center">
        <v-card
          dark
          color="indigo lighten-1"
          rounded="lg"
          width="400px"
          height="auto"
        >
          <v-card-title class="justify-center">
            <p class="text-h4">Log In</p>
          </v-card-title>
          <v-container>
            <v-row justify="center"
              ><v-alert
                :value="flag"
                outlined
                dense
                type="error"
                color="yellow darken-2"
              >
                Email or Password is wrong!
              </v-alert></v-row
            >
            <form @submit.prevent="submitForm">
              <v-card-text>
                <v-row>
                  <v-col align="center">
                    <v-text-field
                      label="email"
                      :rules="emailRules"
                      v-model="email"
                      prepend-icon="face"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col align="center">
                    <v-text-field
                      counter
                      prepend-icon="vpn_key"
                      type="password"
                      :rules="passwordRules"
                      label="password"
                      v-model="password"
                      :append-icon="value ? 'visibility_off' : 'visibility'"
                      @click:append="() => (value = !value)"
                      :type="value ? 'password' : 'text'"
                    >
                    </v-text-field>

                    <v-col cols="12">
                      <v-row class="mt-6">
                        <v-spacer></v-spacer>
                        <v-btn
                          class="mt-5 "
                          align="right"
                          color="yellow darken-3"
                          type="submit"
                          @click="login"
                        >
                          LogIn
                        </v-btn>
                      </v-row>
                    </v-col>
                  </v-col>
                </v-row>
              </v-card-text>
            </form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
export default {
  layout: "admin",
  data() {
    return {
      email: "",
      password: "",
      flag: false,
      value: true,
      emailRules: [v => !!v || "email is required"],
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  computed: {
    isLoggedIn: {
      get() {
        return this.$store.state.auth.isLoggedIn;
      },
      set(isLoggedIn) {
        this.$store.commit("auth/SET_ISLOGGEDIN", isLoggedIn);
      }
    },
    validRecord() {
      let status = false;
      const validEmail = this.email;
      const validPassword = this.password.length;

      if (validPassword >= 5 && validEmail) {
        status = true;
      }
      return status;
    }
  },
  methods: {
    submitForm() {},
    async login() {
      this.isLoggedIn = true;
      const email = this.email;
      const password = this.password;

      const res = await this.$axios.post("http://localhost:3000/", {
        email,
        password
      });
      if (res) {
        if (res.data.flag) {
          this.flag = res.data.flag;
        }
        const token = res.data.token ? res.data.token : null;
        if (token) {
          this.$router.push("/admin/edit-site");
          this.$setCookie("token", token);
          this.$axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          this.isLoggedIn = true;
        }
      }
    }
  }
};
</script>
