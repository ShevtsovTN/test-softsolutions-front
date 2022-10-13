import axios from "axios";

export default class api {
  static async get(url, options = {}) {
    return await axios
      .get(url, options)
      .then((response) => response.data)
      .catch((error) => console.log(error.toJSON()));
  }

  static async post(url, data, config) {
    return await axios
      .post(url, data, config)
      .then((response) => response.data)
      .catch((error) => console.log(error.toJSON()));
  }

  static async update(url, data, config) {
    return await axios
      .put(url, data, config)
      .then((response) => response.data)
      .catch((error) => console.log(error.toJSON()));
  }

  static async destroy(url, options = {}) {
    return await axios
      .delete(url, options)
      .then((response) => response.data)
      .catch((error) => console.log(error.toJSON()));
  }
}
