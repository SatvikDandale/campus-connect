import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

export function addError(errorResponse) {
  return {
    type: ADD_ERROR,
    errorResponse,
  };
}

export function removeError() {
  return {
    type: REMOVE_ERROR,
  };
}
