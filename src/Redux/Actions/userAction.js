import { ADD_USER } from "../actionType";

export function addUser(userObject) {
  return {
    type: ADD_USER,
    payload: userObject,
  };
}
