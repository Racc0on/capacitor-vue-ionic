import Vue from "vue";
import Ionic from "@ionic/vue";

import App from "./App.vue";
import router from "./router";
import { store } from "@/store/index.js";

import { defineCustomElements } from '@ionic/pwa-elements/loader';


Vue.config.productionTip = false;

Vue.use(Ionic);

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");

  defineCustomElements(window);
