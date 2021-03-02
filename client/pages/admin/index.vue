<template>
  <div>
    <HEADER />
    <v-main color="#f2f2f2">
      <v-container>
        <v-row>
          <v-col align="center" justify="space-around">
            <v-card align="center" width="450">
              <v-card-title>
                <div class="display-1">
                  Admin Login
                </div>
              </v-card-title>
              <v-card-text>
                <v-row
                  ><v-alert
                    class="ml-3"
                    :value="flag"
                    outlined
                    dense
                    type="error"
                    color="red"
                  >
                    Email or Password is wrong!
                  </v-alert></v-row
                >
                <v-row>
                  <v-col align="center">
                    <v-text-field
                      label="Email"
                      :rules="emailRules"
                      v-model="email"
                      prepend-icon="admin_panel_settings"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col align="center">
                    <v-text-field
                      :rules="passwordRules"
                      prepend-icon="vpn_key"
                      type="password"
                      label="password"
                      v-model="password"
                      :append-icon="value ? 'visibility_off' : 'visibility'"
                      @click:append="() => (value = !value)"
                      :type="value ? 'password' : 'text'"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions class="mr-3 pb-4">
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  align="right"
                  color="red"
                  class="mt-5"
                  type="submit"
                  @click="login"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col></v-row
        >
      </v-container>
    </v-main>
  </div>
</template>
<script>
import HEADER from "../../components/admin/header";
export default {
  components: { HEADER },
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
      this.$router.push("/admin/edit-site");
    }
  }
};
</script>
