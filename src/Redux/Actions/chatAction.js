import { ADD_MESSAGE, LOAD_MESSAGES } from "../actionTypes";

export function addMessageAction(message, isRecieved) {
    return {
        type: ADD_MESSAGE,
        message,
        isRecieved
    };
}

export function loadMessagesAction(messages, requestMessageObject) {
    console.log(messages)
    return {
        type: LOAD_MESSAGES,
        messages,
        requestMessageObject
    }
}

