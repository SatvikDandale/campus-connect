import { apiCall, serverBaseURL } from "./apiService";

export function search(query, filter) {
  return new Promise((resolve, reject) => {
    return apiCall("GET", `/searchBy${filter}/${query}`)
      .then((results) => {
        resolve(results);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
