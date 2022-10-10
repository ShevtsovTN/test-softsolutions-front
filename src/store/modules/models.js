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
    return state.models;
  },
  getModel(state) {
    return state.model;
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
        commit("setModels", response.data);
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
    const filteredModels = payload.filter(
      (model) => !state.models.some((_model) => _model.id === model.id)
    );
    console.log(payload, filteredModels);
    state.models = state.models.concat(filteredModels);
  },

  setModel(state, payload) {
    state.model = payload;
  },

  addCar(state, payload) {
    state.models.unshift(payload);
  },

  setCheckNextModelsPage(state, payload) {
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
