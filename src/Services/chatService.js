
import { addMessageAction, convoListLoaded, convoListNotLoaded, loadConvoListAction, loadMessagesAction } from './../Redux/Actions/chatAction';
import { apiCallChat } from './apiService';
export function addMessage(message, isRecieved = false) {
    return (dispatch) => {
        dispatch(addMessageAction(message, isRecieved));
    };
}

export function loadMessages(requestMessageObject) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            return apiCallChat("GET", `/messages?from=${requestMessageObject.from}&to=${requestMessageObject.to}`)
                .then((messages) => {
                    dispatch(loadMessagesAction(messages, requestMessageObject));
                    console.log(messages);
                    console.log("IN")
                    resolve(messages);
                })
                .catch((err) => {
                    console.log(err);
                    console.log("tHIS IS ERROR")
                    reject(err);
                })
        })
    }
}

export function loadConvoList(userName) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            return apiCallChat("GET", `/convoList?userName=${userName}`)
                .then((convoList = []) => {
                    resolve(convoList)
                    dispatch(loadConvoListAction(convoList))
                })
                .catch(error=> {
                    console.log(error);
                    dispatch(convoListNotLoaded("Oops! Can't reach to your chats! Please try again..."))
                    reject(error);
                })
        })
    }
}