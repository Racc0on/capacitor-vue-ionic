import firestoreService from "@/api/platforms/firebase/firestore.js";

const state = {
  paragraphs: [],
};

const mutations = {
  setParagraphs(state, paragraphs) {
    state.paragraphs = paragraphs;
  },
};

const actions = {
  getParagraphs({ commit }) {
    return new Promise((resolve, reject) => {
      firestoreService
        .getCollection("paragraphs")
        .then(response => {
          commit("setParagraphs", response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

const getters = {
  paragraphs(state) {
    return state.paragraphs;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
