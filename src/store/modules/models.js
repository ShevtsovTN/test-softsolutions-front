import config from "@/configs/index";
import api from "@/api/index";

const state = {
  models: [],
  model: {},
  checkNextModelsPage: false,
};

// getters
const getters = {
  getModels(state) {
    return state.cars;
  },
  getModel(state) {
    return state.car;
  },
  checkNextModelPage(state) {
    return state.checkNextModelsPage;
  },
};

// actions
const actions = {
  getModels({ commit }, payload) {
    api
      .get(config.url + "models?page=" + payload)
      .then((response) => {
        commit("setLoading", true);
        commit("setCheckNextModelsPage", response.meta);
        commit("setModels", response.records);
        commit("setLoading", false);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  getModel({ commit }, modelId) {
    api
      .get(config.url + "models/" + modelId)
      .then((response) => {
        commit("setLoading", true);
        commit("setModel", response.record);
        commit("setLoading", false);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  createModel({ commit }, payload) {
    api
      .post(config.url + "cars", payload.data)
      .then((response) => {
        commit("addModel", response.record);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  updateModel({ commit }, payload) {
    api
      .update(config.url + "models/" + payload.modelId, payload.data)
      .then((response) => {
        commit("updModel", response.record);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  deleteModel({ commit }, modelId) {
    api
      .destroy(config.url + "models/" + modelId)
      .then((response) => {
        commit("delModel", response.record);
      })
      .catch((error) => console.log(error.toJSON()));
  },
};

// mutations
const mutations = {
  setModels(state, payload) {
    state.models = state.models.concat(payload);
  },

  setModel(state, payload) {
    state.model = payload;
  },

  addCar(state, payload) {
    state.models.unshift(payload);
  },

  // addCommentToPost(state, payload) {
  //   state.model.comments.push(payload);
  // },

  setCheckNextModelPage(state, payload) {
    state.checkNextModelPage = payload.current_page < payload.last_page;
  },

  updModel(state, payload) {
    state.model = payload;
  },

  delModel(state, payload) {
    state.models = state.models.filter(function (item) {
      return item.id !== payload.id;
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
