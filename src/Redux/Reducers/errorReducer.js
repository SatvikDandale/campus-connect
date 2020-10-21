import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

const DEFAULT_STATE = {
  isError: false,
  errorMessage: "No Error",
  errorType: "User", // Types will be: User, Server, Database, Connection
  errorDetails: "",
  timeStamp: null,
  redirect: true,
  redirectPath: "/login",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_ERROR:
      // console.log("Adding Error");
      // console.log(action.errorResponse);
      console.log("Error Response Object");
      console.log(action.errorResponse);
      if (action.errorResponse === undefined) {
        return {
          ...state,
          isError: true,
          errorMessage: "Cannot connect to the server",
          errorType: "Connection",
          timeStamp: Date.now(),
          redirect: true,
        };
      } else if (action.errorResponse.status === 404) {
        return {
          ...state,
          isError: true,
          errorMessage: "Not Found",
          errorType: "User",
          timeStamp: action.errorResponse.data.timeStamp,
          redirect: true,
          redirectPath: "/404",
        };
      } else if (
        action.errorResponse.data.message.includes("JWT expired at") ||
        action.errorResponse.data.message.includes("The token is invalid")
      ) {
        // console.log("REDIRECT");
        return {
          ...state,
          isError: true,
          errorMessage: "Session Expired. Please login again.",
          errorType: "User",
          timeStamp: action.errorResponse.data.timeStamp,
          redirect: true,
          redirectPath: "/login",
        };
      }

      return state;

    case REMOVE_ERROR:
      return {
        ...state,
        isError: false,
      };

    default:
      return state;
  }
};
