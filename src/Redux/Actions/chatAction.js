import { ADD_MESSAGE } from "../actionTypes";

export function addMessageAction(message) {
    return {
        type: ADD_MESSAGE,
        message,
    };
}


