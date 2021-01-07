import { apiCall, serverBaseURL } from "./apiService";
import { initFeed } from "../Redux/Actions/feedAction";

export function getNewsFeed(userName, isCommittee = false) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      console.log(isCommittee)
      let url =
        `/feed${isCommittee ? `/committee/${userName}` : `/${userName}`}`
        console.log(url)
      return apiCall("GET", url)
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

export function getProfilePhotoForUserName(userName, isCommittee = false) {
  return new Promise((resolve, reject) => {
    return apiCall("GET", `${isCommittee ? `/committee/getProfilePhoto/${userName}` : `/getProfilePhoto/${userName}`}`)
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
