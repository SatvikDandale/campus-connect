import { apiCall, serverBaseURL } from "./apiService";
import { initFeed } from "../Redux/Actions/feedAction";

export function getNewsFeed(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", serverBaseURL + `/feed/${userName}`)
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
