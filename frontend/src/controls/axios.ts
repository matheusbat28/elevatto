import axios from "axios";

const instance = axios.create({
  baseURL: "https://elevattoimobiliaria.com.br/api/v1/",
});

export default instance;