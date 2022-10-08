import config from "@/configs/index";
import api from "@/api/index";

const state = {
  brands: [],
  brand: {},
  checkNextBrandsPage: false,
};

// getters
const getters = {
  getBrands(state) {
    return state.brands;
  },
  getBrand(state) {
    return state.brand;
  },
  checkNextBrandPage(state) {
    return state.checkNextBrandsPage;
  },
};

// actions
const actions = {
  getBrands({ commit }, payload) {
    api
      .get(config.url + "brands?page=" + payload)
      .then((response) => {
        commit("setLoading", true);
        commit("setCheckNextBrandsPage", response.meta);
        commit("setBrands", response.records);
        commit("setLoading", false);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  getBrand({ commit }, brandId) {
    api
      .get(config.url + "brand/" + brandId)
      .then((response) => {
        commit("setLoading", true);
        commit("setBrand", response.record);
        commit("setLoading", false);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  createBrand({ commit }, payload) {
    api
      .post(config.url + "brands", payload.data)
      .then((response) => {
        commit("addBrand", response.record);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  updateBrand({ commit }, payload) {
    api
      .update(config.url + "brands/" + payload.brandId, payload.data)
      .then((response) => {
        commit("updBrand", response.record);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  deleteBrand({ commit }, brandId) {
    api
      .destroy(config.url + "brands/" + brandId)
      .then((response) => {
        commit("delCar", response.record);
      })
      .catch((error) => console.log(error.toJSON()));
  },
};

// mutations
const mutations = {
  setBrands(state, payload) {
    state.brands = state.brands.concat(payload);
  },

  setBrand(state, payload) {
    state.brand = payload;
  },

  addBrand(state, payload) {
    state.brands.unshift(payload);
  },

  // addCommentToPost(state, payload) {
  //   state.car.comments.push(payload);
  // },

  setCheckNextBrandPage(state, payload) {
    state.checkNextBrandPage = payload.current_page < payload.last_page;
  },

  updBrand(state, payload) {
    state.brand = payload;
  },

  delBrand(state, payload) {
    state.brands = state.brands.filter(function (item) {
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
