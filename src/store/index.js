import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth.js";
import paragraphs from "./modules/paragraphs.js";
import page from "./modules/page.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    paragraphs,
    page
  }
});

export { store };
