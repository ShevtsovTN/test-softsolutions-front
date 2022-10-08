import api from "@/api";
import config from "@/configs";

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
      .get(config.urlCsrf + "sanctum/csrf-cookie")
      .then(() => {
        api
          .post(config.url + "login", {
            email: payload.email,
            password: payload.password,
          })
          .then((response) => {
            commit("setUser", response.record);
          })
          .catch((error) => console.log(error.toJSON()));
      })
      .catch((error) => console.log(error.toJSON()));
  },

  logout({ commit }) {
    api
      .post(config.url + "logout")
      .then(() => {
        commit("unsetUser");
      })
      .catch((error) => console.log(error.toJSON()));
  },
};

// mutations
const mutations = {
  setUser(state, payload) {
    state.isAuth = true;
    state.user = payload;
    state.permission = [...payload.role].shift().name;
  },

  unsetUser(state) {
    state.isAuth = false;
    state.user = {};
    state.permission = "";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
