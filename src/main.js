import Vue from "vue";
import routes from "./routes";

Vue.config.productionTip = false;

import "./index.css";

const app = new Vue({
  el: "#root",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    view() {
      const page = routes[this.currentRoute];
      return page
        ? require("./pages/" + page + ".vue").default
        : require("./pages/NotFound.vue");
    }
  },
  render(h) {
    return h(this.view);
  }
});

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.pathname;
});
