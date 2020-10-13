import { apiCall, serverBaseURL, setTokenHeader } from "./apiService";
import { addUser } from "../Redux/Actions/userAction";

export function getUserDetails(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", serverBaseURL + `/user/${userName}`)
        .then((userObject) => {
          console.log(userObject);
          dispatch(addUser(userObject));
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };
}

export function self() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", serverBaseURL + `/self`)
        .then((userObject) => {
          dispatch(addUser(userObject));
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };
}

export function login(userName, password) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      let data = {
        userName,
        password,
      };
      return apiCall("POST", serverBaseURL + `/login`, data)
        .then((authenticationResponse) => {
          setTokenHeader(authenticationResponse.jwt);
          localStorage.setItem("token", authenticationResponse.jwt);
          dispatch(addUser(authenticationResponse.user));
          console.log("RESOLVING");
          resolve(data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };
}
