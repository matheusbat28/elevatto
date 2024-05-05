import axios from "./axios";

// get tokens
export async function getTokens(username: string, password: string) {
  const response = await axios.post("jwt/create/", {
    username,
    password,
  });
  return response.data;
}

// verify token
export async function verifyToken(token: string) {
  const response = await axios.post("jwt/verify/", {
    token,
  });
  return response.data;
}

// refresh token
export async function refreshToken(token: string) {
  const response = await axios.post("jwt/refresh/", {
    token,
  });
  return response.data;
}

// is authenticated
export async function isAuthenticated() {
  const access = localStorage.getItem("access");
  if (!access) {
    window.location.href = "/login";
  } else {
    try {
      await verifyToken(access);
    } catch (error) {
      const refresh = localStorage.getItem("refresh");
      if (!refresh) {
        window.location.href = "/login";
      } else {
        const response = await refreshToken(refresh);
        localStorage.setItem("access", response.access);
      }
    }
  }

}

// logout
export function logout() {
  localStorage.clear();
  window.location.href = "/login";
}

// get user Logged
export async function getUserLogged() {
  const access = localStorage.getItem("access");
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
  isAuthenticated();
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
  isAuthenticated();
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
  isAuthenticated();
  const access = localStorage.getItem("access");
  const response = await axios.delete(`properties/${id}/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  return response.data;
}

// get photos
export async function getPhotos(array: Array) {

  let ids = String("")
     //parse array to string
  for (let i = 0; i < array.length; i++) {
    ids = ids + array[i] + ","
  }
  ids = ids.substring(0, ids.length - 1);
 
  let response = Object(
    {
      data: []
    }
  )
if(
  ids.length > 0
) {
  response =  await axios.get("photos/?ids=" + ids);
}
   return response.data;
}

// get photo by id
export async function getPhoto(id: string) {
  const response = await axios.get(`photos/${id}/`);
  return response.data;
}

// create photo
export async function createPhoto(data: any) {
  isAuthenticated();
  const access = localStorage.getItem("access");
  const response = await axios.post("photos/", data, {
    headers: {
      Authorization: `Bearer ${access}`,
      'Content-Type': 'multipart/form-data'
    },
  });
  return response.data;
}

// update photo
export async function updatePhoto(id: string, data: any) {
  isAuthenticated();
  const access = localStorage.getItem("access");
  const response = await axios.put(`photos/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${access}`,
      'Content-Type': 'multipart/form-data'
    },
  });
  return response.data;
}

// delete photo
export async function deletePhoto(id: string) {
  isAuthenticated();
  const access = localStorage.getItem("access");
  const response = await axios.delete(`photos/${id}/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  return response.data;
}