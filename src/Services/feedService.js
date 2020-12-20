import { apiCall, serverBaseURL } from "./apiService";
import { initFeed } from "../Redux/Actions/feedAction";

export function getNewsFeed(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", `/feed/${userName}`)
        .then((feed) => {
          dispatch(initFeed(feed));
          resolve(feed);
        })
        .catch((error) => {
          console.log("Failed to get news feed");
          console.log(error);
          reject();
        });
    });
  };
}

export function getProfilePhotoForUserName(userName) {
  return new Promise((resolve, reject) => {
    return apiCall("GET", `/getProfilePhoto/${userName}`)
      .then((url) => {
        resolve(url);
      })
      .catch((error) => {
        console.log("Error getting profile URL");
        console.log(error);
        reject(error);
      });
  });
}
