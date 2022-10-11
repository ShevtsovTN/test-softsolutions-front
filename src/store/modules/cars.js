import config from "@/configs/index";
import api from "@/api/index";

const state = {
  cars: [],
  car: {},
  checkNextCarPage: false,
};

// getters
const getters = {
  getCars(state) {
    return state.cars;
  },
  getCar(state) {
    return state.car;
  },
  checkNextCarPage(state) {
    return state.checkNextCarPage;
  },
};

// actions
const actions = {
  getCars({ commit }, payload) {
    api
      .get(config.url + "cars?page=" + payload)
      .then((response) => {
        commit("setLoading", true);
        commit("setCheckNextCarPage", response.meta);
        commit("setCars", response.data);
        commit("setLoading", false);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  getCar({ commit }, carId) {
    api
      .get(config.url + "cars/" + carId)
      .then((response) => {
        commit("setLoading", true);
        commit("setCar", response.data);
        commit("setLoading", false);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  createCar({ commit }, payload) {
    api
      .post(config.url + "cars", payload.data)
      .then((response) => {
        commit("addCar", response.data);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  updateCar({ commit }, payload) {
    api
      .update(config.url + "cars/" + payload.carId, payload.data)
      .then((response) => {
        commit("updCar", response.data);
      })
      .catch((error) => console.log(error.toJSON()));
  },

  deleteCar({ commit }, carId) {
    api
      .destroy(config.url + "cars/" + carId)
      .then((response) => {
        commit("delCar", response.data);
      })
      .catch((error) => console.log(error.toJSON()));
  },
};

// mutations
const mutations = {
  setCars(state, payload) {
    const filteredCars = payload.filter(
      (car) => !state.cars.some((_car) => _car.id === car.id)
    );
    state.cars = state.cars.concat(filteredCars);
  },

  setCar(state, payload) {
    state.car = payload;
  },

  addCar(state, payload) {
    state.cars.unshift(payload);
  },

  setCheckNextCarPage(state, payload) {
    state.checkNextCarPage = payload.current_page < payload.last_page;
  },

  updCar(state, payload) {
    state.car = payload;
  },

  delCar(state, payload) {
    state.cars = state.cars.filter(function (item) {
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
