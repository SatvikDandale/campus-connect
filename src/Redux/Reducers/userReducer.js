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
    posts: [
      {
        timeStamp: "2020-11-06T14:39:32.960Z",
        caption: " Photo 2",
        postID: "51b7553c-9074-403f-ab9a-1a2885f077c1",
        userName: "satvik",
        url:
          "https://s3.us-east-1.amazonaws.com/media-service-campus-connect/1604673566259-200118-SQUARE.png",
      },
      {
        timeStamp: "2020-11-06T14:39:32.960Z",
        caption: " Photo 2",
        postID: "51b7553c-9074-403f-ab9a-1a2885f077c1",
        userName: "satvik",
        url:
          "https://s3.us-east-1.amazonaws.com/media-service-campus-connect/1604673566259-200118-SQUARE.png",
      },
      {
        timeStamp: "2020-11-06T14:39:32.960Z",
        caption: " Photo 2",
        postID: "51b7553c-9074-403f-ab9a-1a2885f077c1",
        userName: "satvik",
        url:
          "https://s3.us-east-1.amazonaws.com/media-service-campus-connect/1604673566259-200118-SQUARE.png",
      },
      {
        timeStamp: "2020-11-06T14:39:06.590Z",
        caption: "Adding a Phot",
        postID: "545be275-ec34-440d-afac-ddb87105311d",
        userName: "satvik",
        url:
          "https://s3.us-east-1.amazonaws.com/media-service-campus-connect/1604673539998-beach_97-wallpaper-1024x1024.png",
      },
      {
        timeStamp: "2020-11-06T14:38:52.816Z",
        caption: "Adding a Photo Caption",
        postID: "e61c7b3b-c370-4dca-9959-92d0aa7e26f4",
        userName: "satvik",
      },
    ],
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

    case ADD_FOLLOWING_DATA_OTHER:
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

    default:
      // console.log("Default action hit");
      return state;
  }
};
