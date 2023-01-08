import axios from "axios";
import { createApp } from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";

const app = createApp(App);

app.use(VueAxios, axios).provide("$http", app.config.globalProperties.$http).mount("#app");
