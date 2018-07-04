import Vue from "vue";
import App from "./components/App.vue";

Vue.config.productionTip = false;

import "./index.css";

new Vue({
  el: "#app",
  render: h => h(App)
});
