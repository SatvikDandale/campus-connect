import { addError, removeError } from "../Redux/Actions/errorAction";
import {
  addFollowingDataOther,
  addMember,
  addUserFollowingData,
  followUserDone,
  initOtherUser,
  initUser,
  otherUserLoaded,
  removeMember,
  selfUserLoaded,
  unFollowUserDone,
  updateUser,
} from "../Redux/Actions/userAction";
import { apiCall, setTokenHeader } from "./apiService";

export function committeeLoginFunction(userName, password) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      let data = {
        userName,
        password,
      };
      setTokenHeader();
      return apiCall("POST", `/committee/login`, data)
        .then((authenticationResponse) => {
          setTokenHeader(authenticationResponse.jwt);
          localStorage.setItem("token", authenticationResponse.jwt);
          dispatch(initUser(authenticationResponse.committee));
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

export function getCommitteeFollowers() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", `/committee/getFollowers`)
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

export function committeeSelf() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", `/committee/self`)
        .then((userObject) => {
          dispatch(initUser(userObject));
          dispatch(selfUserLoaded());
          dispatch(removeError());

          dispatch(getCommitteeFollowers());
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



export function getUserDetailsCommittee(userName, other = false) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      console.log(other);
      return apiCall("GET", `/committee/about/${userName}`)
        .then((userObject) => {
          // console.log(userObject);
          if (!other) {
            dispatch(initUser(userObject));
            dispatch(selfUserLoaded());

            dispatch(getCommitteeFollowers());
          } else {
            dispatch(initOtherUser(userObject));
            dispatch(otherUserLoaded());
            dispatch(getOtherUserFollowingCommittee(userName));
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

export function getOtherUserFollowingCommittee(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", `/committee/getFollowers/${userName}`)
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


export function followCommittee(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("POST", "/committee/addFollower", {followerUserName: userName})
        .then((res) => {
          dispatch(followUserDone(userName));
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
export function unFollowCommittee(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("POST", "/committee/removeFollower", {followerUserName: userName})
        .then((res) => {
          dispatch(unFollowUserDone(userName));
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


export function updateCommitteeAbout(updatedUserDetails) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("POST", "/committee/editCommittee", updatedUserDetails)
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

export function addCommitteeMember(data) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("POST", "/committee/addMember", data)
        .then(() => {
          // dispatch(addMember(data))
          dispatch(removeError());
          resolve();
        })
        .catch((error) => {
          dispatch(addError(error.response));
          reject(error);
        });
    });
  };
}
export function removeCommitteeMember(data) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("POST", "/committee/deleteMember", data)
        .then((userObject) => {
          // dispatch(updateUser(updatedUserDetails));
          // dispatch(removeMember(data))
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