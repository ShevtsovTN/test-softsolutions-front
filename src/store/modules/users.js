import api from "@/api";
import config from "@/configs";
import router from "@/router";

const state = {
  user: {},
  permission: "",
  isAuth: false,
  token: "",
};

// getters
const getters = {
  getUser(state) {
    return state.user;
  },
  getToken(state) {
    return state.token;
  },
  isAdmin(state) {
    return state.permission === "admin" && state.isAuth;
  },
  isSeller(state) {
    return state.permission === "seller" && state.isAuth;
  },
  isCustomer(state) {
    return state.permission === "customer" && state.isAuth;
  },
  isAuth(state) {
    return state.isAuth;
  },
};

// actions
const actions = {
  login({ commit }, payload) {
    api
      .post(config.url + "auth/login", {
        email: payload.email,
        password: payload.password,
      })
      .then((response) => {
        commit("setUser", response);
        router.push({ name: "main" });
      })
      .catch((error) => console.log(error.toJSON()));
  },

  logout({ commit }) {
    api
      .post(config.url + "auth/logout")
      .then(() => {
        commit("unsetUser");
        router.push({ name: "login" });
      })
      .catch((error) => console.log(error.toJSON()));
  },
};

// mutations
const mutations = {
  setUser(state, payload) {
    state.isAuth = true;
    state.user = payload.data;
    state.token = payload.token;
    state.permission = [...payload.data.roles].shift().role;
  },

  unsetUser(state) {
    state.isAuth = false;
    state.user = {};
    state.token = "";
    state.permission = "";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
