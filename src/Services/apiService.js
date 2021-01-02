import axios from "axios";

export const serverBaseURL = `https://campus-social-media-backend.herokuapp.com`;
export const chatServerURL = `https://campus-social-media-chat.herokuapp.com`;
// export const serverBaseURL = `http://localhost:8080`;
axios.defaults.baseURL = serverBaseURL;

// prettier-ignore
var instance = axios.create({
  url: "/",
  baseURL: serverBaseURL,
  timeout: 10000,
});

var instance2 = axios.create({
  url: "/",
  baseURL: chatServerURL,
  timeout: 10000,
})

// The authorization header will be set with axios for any further use in the session.
export function setTokenHeader(token) {
  console.log("Request headers set")
  console.log(token)
  if (token) {
    instance.interceptors.request.use(function (config) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

// A generalized method for HTTP REST APIs
export function apiCall(method = "GET", path, data = null) {
  return new Promise((resolve, reject) => {
    path = path.replace(/\/\//g, "/");
    method = method.toLowerCase()
    // GET REQUEST
    if (method === "get")
      return instance
        .get(path)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    // POST REQUEST
    else if (method === "post")
      instance
        .post(path, data)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    else if (method === "patch")
      instance
        .patch(path, data)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    else if (method === "delete")
      instance
        .delete(path, data)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
  });
}

export function apiCallChat(method = "GET", path, data = null) {
  return new Promise((resolve, reject) => {
    path = path.replace(/\/\//g, "/");
    method = method.toLowerCase()
    // GET REQUEST
    if (method === "get")
      return instance2
        .get(path)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    // POST REQUEST
    else if (method === "post")
      instance2
        .post(path, data)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    else if (method === "patch")
      instance2
        .patch(path, data)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    else if (method === "delete")
      instance2
        .delete(path, data)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
  });
}
