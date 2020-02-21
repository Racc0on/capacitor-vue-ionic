import firestoreService from "@/api/platforms/firebase/firestore.js";

const state = {
  pageData: []
};

const mutations = {
  setPageData(state, pageData) {
    state.pageData = pageData;
  }
};

const actions = {
  getPageData({ commit }, collectionName) {
    return new Promise((resolve, reject) => {
      firestoreService
        .getCollection(collectionName)
        .then(response => {
          commit("setPageData", response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

const getters = {
  pageData(state) {
    return state.pageData;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
