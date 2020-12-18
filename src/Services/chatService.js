
import { addMessageAction } from './../Redux/Actions/chatAction';
export function addMessage(message) {
    return (dispatch) => {
        dispatch(addMessageAction(message));
    };
}
