import axios from "./axios";

// get tokens
export async function getTokens(username: string, password: string) {
  const response = await axios.post("jwt/create/", {
    username,
    password,
  });
  return response.data;
}

// get user Logged
export async function getUserLogged() {
  const access = localStorage.getItem("access");
  console.log(access);
  const response = await axios.get("users/me/", {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  return response.data;
}

// get properties
export async function getProperties() {
  const response = await axios.get("properties/");
  return response.data;
}

// get property by id
export async function getProperty(id: string) {
  const response = await axios.get(`properties/${id}/`);
  return response.data;
}

// create property
export async function createProperty(data: any) {
  const access = localStorage.getItem("access");
  const response = await axios.post("properties/", data, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  return response.data;
}

// update property
export async function updateProperty(id: string, data: any) {
  const access = localStorage.getItem("access");
  const response = await axios.put(`properties/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  return response.data;
}

// delete property
export async function deleteProperty(id: string) {
  const access = localStorage.getItem("access");
  const response = await axios.delete(`properties/${id}/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  return response.data;
}