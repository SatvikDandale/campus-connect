import {
  ADD_USER_FOLLOWING_DATA,
  FOLLOW_USER,
  INIT_OTHER_USER,
  INIT_USER,
  LOAD_OTHER_USER,
  LOAD_SELF_USER,
  OTHER_USER_LOADED,
  SELF_USER_LOADED,
  UPDATE_USER,
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

    // case UPDATE_NAME:
    //   return {
    //     ...state,
    //     firstName: action.nameObject.firstName,
    //     lastName: action.nameObject.lastName,
    //   };

    // case UPDATE_BIO:
    //   return {
    //     ...state,
    //     bio: action.bio,
    //   };

    // case UPDATE_PERSONAL_DETAILS:
    //   return {
    //     ...state,
    //     personalDetails: action.personalDetails,
    //   };

    case UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.userObject,
        },
      };

    case ADD_USER_FOLLOWING_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          followers: action.data.followers,
          following: action.data.following,
        },
      };

    case FOLLOW_USER:
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.following],
        },
      };

    default:
      // console.log("Default action hit");
      return state;
  }
};
