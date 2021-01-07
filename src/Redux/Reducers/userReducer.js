import {
  ADD_FOLLOWING_DATA_OTHER,
  ADD_USER_FOLLOWING_DATA,
  FOLLOW_USER,
  INIT_OTHER_USER,
  INIT_USER,
  LOAD_OTHER_USER,
  LOAD_SELF_USER,
  OTHER_USER_LOADED,
  SELF_USER_LOADED,
  UNFOLLOW_USER,
  UPDATE_USER,
  GET_POSTS_BY_USERNAME,
  RESET,
  RESET_OTHER_USER,
  ADD_MEMBER,
  REMOVE_MEMBER,
} from "../actionTypes";

const DEFAULT_STATE = {
  user: {
    userName: null,
    firstName: null,
    lastName: null,
    email: null,
    collegeDetails: {
      year: "",
      branch: "",
      collegeName: "",
    },
    personalDetails: {
      homeTown: "",
      talents: [],
      achievements: [],
    },
    personalChats: null,
    groups: null,
    followers: null,
    following: null,
    bio: "",
    intro: "",
    posts: [],
  },
  selfUserRequestSent: false,
  otherUser: null,
  otherUserRequestSent: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RESET:
      return DEFAULT_STATE;

    case RESET_OTHER_USER:
      return {
        ...state,
        otherUser: null,
      };

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
      if (action.userObject.logoUrl) {
        // Committee Object
        action.userObject.isCommittee = true;
        action.userObject.profilePhotoURL = action.userObject.logoUrl;
      }
      return {
        ...state,
        user: {
          ...state.user,
          ...action.userObject,
        },
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
      if (action.userObject.logoUrl) {
        // Committee Object
        action.userObject.isCommittee = true;
        action.userObject.profilePhotoURL = action.userObject.logoUrl;
      }
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
      if (!action.data.followers) {
        return {
          ...state,
          user: { ...state.user, followers: action.data },
        };
      }
      return {
        ...state,
        user: {
          ...state.user,
          followers: action.data.followers,
          following: action.data.following,
        },
      };

    case ADD_FOLLOWING_DATA_OTHER:
      if (!action.data.followers) {
        return {
          ...state,
          otherUser: { ...state.otherUser, followers: action.data },
        };
      }
      return {
        ...state,
        otherUser: {
          ...state.otherUser,
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

    case UNFOLLOW_USER:
      let followingList = [...state.user.following];
      console.log("REDUCER");
      console.log(action);
      const index = followingList.indexOf(action.following);
      followingList.splice(index, 1);
      console.log(followingList);
      return {
        ...state,
        user: {
          ...state.user,
          following: followingList,
        },
      };

    case GET_POSTS_BY_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          posts: action.posts,
        },
      };

    case ADD_MEMBER:
      let oldMembers = [...state.user.committeeMembers]
      oldMembers.push(action.data);
      return {
        ...state,
        user: {
          ...state.user,
          committeeMembers: oldMembers
        }
      }

      case REMOVE_MEMBER:
        let newMembers = [...state.user.committeeMembers]
        let memberIndex = newMembers.findIndex((person) => person.userName === action.data.userName)
        newMembers.splice(memberIndex, 1)
        return {
          ...state,
          user: {
            ...state.user,
            committeeMembers: newMembers
          }
        }

    default:
      // console.log("Default action hit");
      return state;
  }
};
