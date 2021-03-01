const defaultState = {
  currentMode: "reading"
};

export const state = () => ({ ...defaultState });

export const mutations = {
  SET_CURRENTMODE(state, currentMode) {
    state.currentMode = currentMode;
  }
};
