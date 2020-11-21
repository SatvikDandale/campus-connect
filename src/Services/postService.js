import { apiCall, serverBaseURL } from "./apiService";
import { addError, removeError } from "../Redux/Actions/errorAction";
import { getPosts } from "../Redux/Actions/postAction";

export function getPostsByUserName(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", serverBaseURL + `/posts/${userName}`)
        .then((posts) => {
          dispatch(getPosts(posts));
          dispatch(removeError());
          // console.log("RESOLVING");
          resolve(posts);
        })
        .catch((error) => {
          dispatch(addError(error.response));
          reject(error);
        });
    });
  };
}

export function getPostsForOtherUser(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", serverBaseURL + `/posts/${userName}`)
        .then((posts) => {
          dispatch(removeError());
          // console.log("RESOLVING");
          resolve(posts);
        })
        .catch((error) => {
          dispatch(addError(error.response));
          reject(error);
        });
    });
  };
}
