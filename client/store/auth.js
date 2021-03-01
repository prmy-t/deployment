const defaultState = {
  isLoggedIn: false
};

export const state = () => ({ ...defaultState });

export const mutations = {
  SET_ISLOGGEDIN(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
  }
};
