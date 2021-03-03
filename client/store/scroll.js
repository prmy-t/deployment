const defaultState = {
  target: "#scrolling-techniques-7"
};

export const state = () => ({ ...defaultState });

export const mutations = {
  SET_TARGET(state, target) {
    state.target = target;
  }
};
