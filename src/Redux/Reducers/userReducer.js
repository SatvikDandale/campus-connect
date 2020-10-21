import {
  INIT_OTHER_USER,
  INIT_USER,
  LOAD_OTHER_USER,
  LOAD_SELF_USER,
  OTHER_USER_LOADED,
  SELF_USER_LOADED,
} from "../actionTypes";

const DEFAULT_STATE = {
  user: {
    userName: null,
    firstName: null,
    lastName: null,
    email: null,
    collegeDetails: {
      year: "Final ",
      branch: "Computer ",
      collegeName: "Vishwakarma",
    },
    personalDetails: {
      homeTown: "Buldana, ",
      talents: ["Guitar"],
      achievements: [],
    },
    personalChats: null,
    groups: null,
    followers: null,
    following: null,
    bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    intro: "General  Computer Engineering",
  },
  selfUserRequestSent: false,
  otherUser: null,
  otherUserRequestSent: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOAD_SELF_USER:
      return {
        ...state,
        selfUserRequestSent: true,
      };

    case SELF_USER_LOADED:
      return {
        ...state,
        selfUserRequestSent: false,
      };

    case INIT_USER:
      // The payload has userObject
      // console.log("user object received");
      // console.log(action.userObject);
      return {
        ...state,
        user: action.userObject,
      };

    case LOAD_OTHER_USER:
      return {
        ...state,
        otherUserRequestSent: true,
      };

    case OTHER_USER_LOADED:
      return {
        ...state,
        otherUserRequestSent: false,
      };

    case INIT_OTHER_USER:
      return {
        ...state,
        otherUser: action.userObject,
      };

    default:
      // console.log("Default action hit");
      return state;
  }
};
