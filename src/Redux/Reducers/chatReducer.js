import { LOAD_MESSAGES, ADD_MESSAGE, ADD_RECIEVED_MESSAGE } from '../actionTypes';

const DEFAULT_STATE = {
    messages: {
        "User123": [
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
            {
                from: "xyz",
                to: "try",
                message: "Bye1",
                time: new Date().toISOString(),
            },
            {
                from: "User123",
                to: "try",
                message: "Hi",
                time: new Date().toISOString(),
            },
            {
                from: "try",
                to: "Rak",
                message: "Hello",
                time: new Date().toISOString(),
            },
            {
                from: "xyz",
                to: "try",
                message: "Bye1",
                time: new Date().toISOString(),
            },
            {
                from: "QW",
                to: "try",
                message: "Hi",
                time: new Date().toISOString(),
            },
            {
                from: "try",
                to: "Rak",
                message: "Hello",
                time: new Date().toISOString(),
            },
            {
                from: "xyz",
                to: "try",
                message: "Bye1",
                time: new Date().toISOString(),
            },
            {
                from: "QW",
                to: "try",
                message: "Hi",
                time: new Date().toISOString(),
            },
            {
                from: "try",
                to: "Rak",
                message: "Hello",
                time: new Date().toISOString(),
            },
            {
                from: "xyz",
                to: "try",
                message: "Bye1",
                time: new Date().toISOString(),
            },
        ],
        "satvik": [
            {
                from: "QW",
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
            {
                from: "xyz",
                to: "try",
                message: "Bye1",
                time: new Date().toISOString(),
            },
            {
                from: "QW",
                to: "try",
                message: "Hi",
                time: new Date().toISOString(),
            },
            {
                from: "try",
                to: "Rak",
                message: "Hello",
                time: new Date().toISOString(),
            },
            {
                from: "xyz",
                to: "try",
                message: "Bye1",
                time: new Date().toISOString(),
            },
            {
                from: "QW",
                to: "try",
                message: "Hi",
                time: new Date().toISOString(),
            },
            {
                from: "try",
                to: "Rak",
                message: "Hello",
                time: new Date().toISOString(),
            },
            {
                from: "xyz",
                to: "try",
                message: "Bye1",
                time: new Date().toISOString(),
            },
            {
                from: "QW",
                to: "try",
                message: "Hi",
                time: new Date().toISOString(),
            },
            {
                from: "try",
                to: "Rak",
                message: "Hello",
                time: new Date().toISOString(),
            },
            {
                from: "xyz",
                to: "try",
                message: "Bye1",
                time: new Date().toISOString(),
            },
        ],
    }
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case LOAD_MESSAGES:
            return state;
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
        default:
            return state;
    }
}