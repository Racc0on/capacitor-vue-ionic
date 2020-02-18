import firestoreService from "@/api/platforms/firebase/firestore.js";
import occhioCMSService from "@/api/platforms/occhio-cms/occhio-cms.js";

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
  },

  /* eslint-disable */
  getParagraphsFromCMS({}, nodeId) {
    return new Promise((resolve, reject) => {
      /* eslint no-console: ["error", {allow: ["log"]}] */
      console.log(nodeId);
      occhioCMSService
        .getPageData(nodeId)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  /* eslint-enable */
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
