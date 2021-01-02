import { ADD_MESSAGE, CONVO_LIST_LOADED, LOAD_CONVO_LIST, LOAD_MESSAGES, SET_MINIMISED } from "../actionTypes";

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

export function convoListLoaded() {
    return {
        type: CONVO_LIST_LOADED
    }
}
export function loadConvoListAction(convoList = []) {
    return {
        type: LOAD_CONVO_LIST,
        convoList
    }
}

export function setMinimised(condition = false) {
    return {
        type: SET_MINIMISED,
        condition
    }
}