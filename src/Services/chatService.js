
import { addMessageAction } from './../Redux/Actions/chatAction';
export function addMessage(message, isRecieved = false) {
    return (dispatch) => {
        dispatch(addMessageAction(message, isRecieved));
    };
}

