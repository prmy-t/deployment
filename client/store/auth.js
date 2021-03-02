import Cookie from "js-cookie";
const SimpleCrypto = require("simple-crypto-js").default;
const myCrypto = new SimpleCrypto("myKey");

const defaultState = {
  isLoggedIn: false
};

export const state = () => ({ ...defaultState });

export const mutations = {
  SET_ISLOGGEDIN(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
  }
};

export const actions = {
  // methods
  reVerify({ commit }) {
    const customToken = Cookie.get("token");

    this.$axios.defaults.headers.common.Authorization = `Bearer ${customToken}`;

    if (customToken != null && customToken != "null") {
      commit("SET_ISLOGGEDIN", true);
    }
  }
};
