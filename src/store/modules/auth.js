const state = {
  user: null
};

const mutations = {
  authUser(state, user) {
    state.user = user;
  }
};

const actions = {
  setUser({ commit }, user) {
    commit("authUser", user);
  }
};

const getters = {
  user(state) {
    return state.user;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
