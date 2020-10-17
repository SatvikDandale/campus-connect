import { INIT_USER, INIT_OTHER_USER } from "../actionTypes";

export function initUser(userObject) {
  return {
    type: INIT_USER,
    userObject,
  };
}
export function initOtherUser(userObject) {
  return {
    type: INIT_OTHER_USER,
    userObject,
  };
}
