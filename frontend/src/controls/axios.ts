import axios from "axios";

const instance = axios.create({
  baseURL: "https://minhamaria.com/api/v1/",
});

export default instance;