import { createStore } from "vuex";
import cars from "@/store/modules/cars";
import models from "@/store/modules/models";
import brands from "@/store/modules/brands";
import users from "@/store/modules/users";
import data from "@/store/modules/data";

export default createStore({
  modules: {
    cars,
    models,
    brands,
    users,
    data,
  },
});
