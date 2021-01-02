import { LOAD_MESSAGES, ADD_MESSAGE, ADD_RECIEVED_MESSAGE, LOAD_CONVO_LIST } from '../actionTypes';

const DEFAULT_STATE = {
    messages: {},
    isConvoListLoaded: false,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case LOAD_MESSAGES:
            let messages = { ...state.messages };
            messages[action.requestMessageObject.to] = action.messages;
            return {
                ...state,
                messages
            };
        /*
            action.messages :
                [
                    {
                        "createdAt": "2020-12-27T14:55:10.665Z",
                        "conversationId": "satvik$User123",
                        "messageId": "800317da-4558-46df-a951-b807ce6ae6be",
                        "from": "User123",
                        "to": "satvik",
                        "message": "ghg",
                        "type": "text",
                        "updatedAt": "2020-12-27T14:55:10.665Z"
                    }
                ]
            messages : {
                "user123":[
                    {
                        from: "User123",
                        to: "try",
                        message: "Hiiiii",
                        time: new Date().toISOString(),
                    },
                    {
                        from: "try",
                        to: "Rak",
                        message: "Hello",
                        time: new Date().toISOString(),
                    },
                ]
            }
        */
        case ADD_MESSAGE:
            console.log(action);
            console.log("_++++++++++++++++++=")
            var to = action.isRecieved ? action.message.from : action.message.to;
            let newMessages = { ...state.messages };
            let personalMessages = newMessages[to];
            // console.log(personalMessages);
            personalMessages = [...personalMessages, action.message];
            // console.log(personalMessages);
            // newMessages[to] = personalMessages;
            newMessages = { ...newMessages, [to]: personalMessages }
            return {
                ...state,
                messages: newMessages
            }
        //{ satvik : Array (Messages),userName : Array (Messages)
        // user0 : Array (Messages),  =>new array
        // user123 : old Array (Messages),
        // userName : Array (Messages),
        // }
        // user123: personalMessages

        case LOAD_CONVO_LIST:
            // Args: list of userNames with whom there are conversations
            let messagesObject = {...state.messages}
            if (action.convoList) {
                action.convoList.forEach((userName) => {
                    messagesObject[userName] = []
                })
            }
            else {
                return state;
            }
            return {
                ...state,
                messages: messagesObject,
                isConvoListLoaded: true
            }

        default:
            return state;
    }
}