import axios from "axios";

export default class api {
  static async get(url, options = {}) {
    return await axios
      .get(url, options)
      .then((response) => response.data)
      .catch((error) => console.log(error.toJSON()));
  }

  static async post(url, data, options = {}) {
    return await axios
      .post(url, data, options)
      .then((response) => response.data)
      .catch((error) => console.log(error.toJSON()));
  }

  static async update(url, data, options = {}) {
    return await axios
      .put(url, data, options)
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
