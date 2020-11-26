import { ADD_LIKE, INIT__FEED } from "../actionTypes";
import { REMOVE_LIKE } from './../actionTypes';

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

      case REMOVE_LIKE:
        let tempFeed = [...state.feed]
        let tempIndex = tempFeed.findIndex((post) => action.postID === post.postID);
        let tempPost = tempFeed[tempIndex];
        if(tempPost.likes)
        {
          let likeIndex = tempPost.likes.indexOf(action.userName);
          tempPost.likes.splice(likeIndex, 1);
        }
        console.log("TempPost:")
        console.log(tempPost);
        tempFeed[tempIndex] = tempPost
        return{
            ...state,
             feed : tempFeed
        };
    default:
      return state;
  }
};


