import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "@/store";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "multipart/form-data";
