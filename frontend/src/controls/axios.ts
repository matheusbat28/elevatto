import axios from "axios";

const instance = axios.create({
  baseURL: "https://imobiliariaelevatto.com//api/v1/",
});

export default instance;