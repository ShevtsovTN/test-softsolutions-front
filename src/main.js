import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import api from "@/api";
import config from "@/configs";
import store from "@/store";

const app = createApp(App);

app.use(router);

app.mount("#app");

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Bearer"] = store.getters.getToken;

// api.get(config.url + "auth/user").then((response) => {
//   console.log(response);
// });
