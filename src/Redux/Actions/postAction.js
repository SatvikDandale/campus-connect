import { ADD_LIKE, GET_POSTS_BY_USERNAME } from "../actionTypes";

export function getPosts(posts) {
  return {
    type: GET_POSTS_BY_USERNAME,
    posts,
  };
}

export function addLikeToPost(postID, userName){
  return{
      type: ADD_LIKE,
      postID,
      userName
  };
}