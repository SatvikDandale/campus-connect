import { ADD_LIKE, INIT__FEED } from "../actionTypes";

const DEFAULT_STATE = {
  feedLoaded: false,
  feed: [],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case INIT__FEED:
      return {
        ...state,
        feedLoaded: true,
        feed: action.feed,
      };

    case ADD_LIKE:
      let newFeed = [...state.feed]
      let index = newFeed.findIndex((post) => action.postID === post.postID);
      let post = newFeed[index];
      if(!post.likes)
        post.likes = [action.userName]
      else
        post.likes = [...post.likes, action.userName]
      newFeed[index] = post
      return{
        ...state,
          feed : newFeed
      }
    default:
      return state;
  }
};


