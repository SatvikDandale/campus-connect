import { ADD_MESSAGE, ADD_RECIEVED_MESSAGE } from "../actionTypes";

export function addMessageAction(message, isRecieved) {
    return {
        type: ADD_MESSAGE,
        message,
        isRecieved
    };
}

