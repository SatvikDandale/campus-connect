import { apiCall, serverBaseURL, setTokenHeader } from "./apiService";
import {
  addUserFollowingData,
  initOtherUser,
  initUser,
  otherUserLoaded,
  selfUserLoaded,
  updateUser,
  followUserDone,
  addFollowingDataOther,
  unFollowUserDone,
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
      return apiCall("POST", `/login`, data)
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
export function signUp(signUpData) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      return apiCall("POST", `/signUp`, signUpData, config)
        .then((authenticationResponse) => {
          setTokenHeader(authenticationResponse.jwt);
          localStorage.setItem("token", authenticationResponse.jwt);
          dispatch(initUser(authenticationResponse.user));
          dispatch(selfUserLoaded());
          dispatch(removeError());
          // console.log("RESOLVING");
          resolve(authenticationResponse.user);
        })
        .catch((error) => {
          // console.log(error.response);
          dispatch(addError(error.response));
          reject(error);
        });
    });
  };
}

export function getUserFollowing(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall(
        "GET",
        `/userFollowerFollowing/${userName}`
      )
        .then((data) => {
          // console.log(userObject);
          dispatch(addUserFollowingData(data));
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
export function getOtherUserFollowing(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall(
        "GET",
        `/userFollowerFollowing/${userName}`
      )
        .then((data) => {
          // console.log(userObject);
          dispatch(addFollowingDataOther(data));
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

export function getUserDetails(userName, other = false) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      console.log(other);
      return apiCall("GET", `/userAbout/${userName}`)
        .then((userObject) => {
          // console.log(userObject);
          if (!other) {
            dispatch(initUser(userObject));
            dispatch(selfUserLoaded());

            dispatch(getUserFollowing(userName));
          } else {
            dispatch(initOtherUser(userObject));
            dispatch(otherUserLoaded());
            dispatch(getOtherUserFollowing(userName));
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
      return apiCall("GET", `/self`)
        .then((userObject) => {
          dispatch(initUser(userObject));
          dispatch(selfUserLoaded());
          dispatch(removeError());

          dispatch(getUserFollowing(userObject.userName));
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

export function updateUserAbout(updatedUserDetails) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("POST", "/editUser", updatedUserDetails)
        .then((userObject) => {
          dispatch(updateUser(updatedUserDetails));
          dispatch(removeError());
          resolve(userObject);
        })
        .catch((error) => {
          dispatch(addError(error.response));
          reject(error);
        });
    });
  };
}

export function followUser({ follower, following }) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const data = {
        follower,
        following,
      };
      return apiCall("POST", "/follow", data)
        .then((res) => {
          dispatch(followUserDone(following));
          dispatch(removeError());
          resolve();
        })
        .catch((error) => {
          dispatch(addError(error.response));
          reject();
        });
    });
  };
}

export function unFollowUser({ follower, following }) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const data = {
        follower,
        following,
      };
      return apiCall("POST", "/unfollow", data)
        .then((res) => {
          dispatch(unFollowUserDone());
          dispatch(removeError());
          resolve();
        })
        .catch((error) => {
          dispatch(addError(error.response));
          reject();
        });
    });
  };
}

export function uploadProfilePhoto(formData) {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return apiCall(
      "POST",
      "/uploadProfilePhoto",
      formData,
      config
    )
      .then((photoURL) => {
        console.log("Photo Uploaded");
        console.log(photoURL);
        resolve(photoURL);
      })
      .catch((error) => {
        console.log("Error uploading photo");
        console.log(error);
        reject(error);
      });
  });
}
