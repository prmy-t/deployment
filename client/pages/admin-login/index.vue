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
            <!-- <v-row>
              <v-alert
                class="ml-3"
                :value="error"
                outlined
                dense
                type="error"
                color="red"
              >
                Email or Password is wrong!
              </v-alert>
              </v-row> -->
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
  methods: {
    login() {
      this.$router.push("/admin-login/add-mcqs");
    }
  }
};
</script>
