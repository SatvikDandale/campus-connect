import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

const DEFAULT_STATE = {
  isError: false,
  errorMessage: "No Error",
  errorType: "User", // Types will be: User, Server, Database, Connection
  errorDetails: "",
  timeStamp: null,
  redirect: true,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_ERROR:
      // console.log("Adding Error");
      // console.log(action.errorResponse);
      if (action.errorResponse === undefined) {
        return {
          ...state,
          isError: true,
          errorMessage: "Cannot connect to the server",
          errorType: "Connection",
          timeStamp: Date.now(),
          redirect: true,
        };
      } else if (action.errorResponse.data.message.includes("JWT expired at")) {
        return {
          ...state,
          isError: true,
          errorMessage: action.errorResponse.data.message,
          errorType: "User",
          timeStamp: action.errorResponse.data.timeStamp,
          redirect: true,
        };
      }

      return state;

    case REMOVE_ERROR:
      return {
        ...state,
        isError: false,
        errorMessage: "No Error",
        errorType: "User",
        errorDetails: "",
        timeStamp: null,
        redirect: false,
      };

    default:
      return state;
  }
};
