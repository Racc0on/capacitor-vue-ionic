import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth.js";
import paragraphs from "./modules/paragraphs.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    paragraphs
  }
});

export { store };
