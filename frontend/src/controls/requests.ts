import axios from "./axios";

export async function getTokens(username: string, password: string) {
  const response = await axios.post("jwt/create/", {
    username,
    password,
  });
  return response.data;
}