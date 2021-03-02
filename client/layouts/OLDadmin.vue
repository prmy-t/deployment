<template>
  <v-app id="inspire">
    <div>
      <nuxt />
    </div>
    <Footer />
  </v-app>
</template>
<script>
import Footer from "../components/footer";
export default {
  components: { Footer },
  computed: {
    isLoggedIn: {
      get() {
        return this.$store.state.auth.isLoggedIn;
      },
      set(isLoggedIn) {
        this.$store.commit("auth/SET_ISLOGGEDIN", isLoggedIn);
      }
    },
    flag: {
      get() {
        return this.$store.state.adminFlag.flag;
      },
      set(flag) {
        this.$store.commit("adminFlag/SET_FLAG", flag);
      }
    }
  },
  mounted() {
    this.reVerify();
  },
  methods: {
    reVerify() {
      this.$store.dispatch("auth/reVerify");
    },
    editSite() {
      this.$router.push("/admin/edit-site");
      this.flag = "edit-site";
    },
    reports() {
      this.$router.push("/admin/reports");
      this.flag = "reports";
    },
    switchToPublic() {
      this.$router.go(-1);
    },
    logOut() {
      this.$removeCookie("token");
      this.isLoggedIn = false;
      this.$router.push("/");
    }
  }
};
</script>
