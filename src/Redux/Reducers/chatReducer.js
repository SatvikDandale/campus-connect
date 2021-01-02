import {
  LOAD_MESSAGES,
  ADD_MESSAGE,
  LOAD_CONVO_LIST,
  SET_MINIMISED,
  INIT_CONVERSATION,
  SET_CURRENT_CHAT,
  CONVO_LIST_LOADED,
  CONVO_LIST_NOT_LOADED,
} from "../actionTypes";

const DEFAULT_STATE = {
  messages: {},
  isConvoListLoaded: false,
  minimised: false,
  currentChat: null,
  isConvoError: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      if (action.messages && action.messages.length === 0) return state;
      let messages = { ...state.messages };
      messages[action.requestMessageObject.to] = action.messages;
      return {
        ...state,
        messages,
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
      console.log("_++++++++++++++++++=");
      var to = action.isRecieved ? action.message.from : action.message.to;
      let newMessages = { ...state.messages };
      let personalMessages = newMessages[to];
      if (!personalMessages) personalMessages = [];
      // console.log(personalMessages);
      personalMessages = [...personalMessages, action.message];
      // console.log(personalMessages);
      // newMessages[to] = personalMessages;
      newMessages = { ...newMessages, [to]: personalMessages };
      return {
        ...state,
        messages: newMessages,
      };
    //{ satvik : Array (Messages),userName : Array (Messages)
    // user0 : Array (Messages),  =>new array
    // user123 : old Array (Messages),
    // userName : Array (Messages),
    // }
    // user123: personalMessages

    case CONVO_LIST_LOADED:
      return {
        ...state,
        isConvoListLoaded: true,
      };

    case CONVO_LIST_NOT_LOADED:
      let convoError = "";
      if (action.convoError) convoError = action.convoError;
      return {
        ...state,
        isConvoListLoaded: true,
        isConvoError: convoError
      };

    case LOAD_CONVO_LIST:
      // Args: list of userNames with whom there are conversations
      let messagesObject = { ...state.messages };
      if (action.convoList) {
        action.convoList.forEach((userName) => {
          messagesObject[userName] = [];
        });
      } else {
        return state;
      }
      return {
        ...state,
        messages: messagesObject,
        isConvoListLoaded: true,
      };

    case SET_MINIMISED:
      return {
        ...state,
        minimised: action.condition,
      };

    case INIT_CONVERSATION:
      let tempMessages = { ...state.messages };
      let target = action.to;
      console.log(tempMessages);
      tempMessages[target] = [];
      console.log(tempMessages);
      return {
        ...state,
        messages: tempMessages,
      };

    case SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: action.currentChat,
      };

    default:
      return state;
  }
};
