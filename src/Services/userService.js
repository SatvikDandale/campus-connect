import { apiCall, serverBaseURL, setTokenHeader } from "./apiService";
import {
  initOtherUser,
  initUser,
  selfUserLoaded,
} from "../Redux/Actions/userAction";
import { addError, removeError } from "../Redux/Actions/errorAction";

/*
  These functions provide access to the api service.
  All the Promises are wrapped with a function which takes dispatcher as an argument for redux
        to call these functions and redux actions to be called from here.
*/

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
          dispatch(initUser(authenticationResponse.user));
          dispatch(selfUserLoaded());
          dispatch(removeError());
          // console.log("RESOLVING");
          resolve(data);
        })
        .catch((error) => {
          // console.log(error.response);
          dispatch(addError(error.response));
          reject(error);
        });
    });
  };
}

export function getUserDetails(userName, other = false) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      console.log(other);
      return apiCall("GET", serverBaseURL + `/userAbout/${userName}`)
        .then((userObject) => {
          // console.log(userObject);
          if (!other) {
            dispatch(initUser(userObject));
            dispatch(selfUserLoaded());
          } else {
            dispatch(initOtherUser(userObject));
          }
          dispatch(removeError());
          resolve();
        })
        .catch((error) => {
          // console.log(error.response);
          dispatch(addError(error.response));
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
          dispatch(initUser(userObject));
          dispatch(selfUserLoaded());
          dispatch(removeError());
          resolve(userObject);
        })
        .catch((error) => {
          // console.log(error.response);
          dispatch(addError(error.response));
          reject(error);
        });
    });
  };
}
