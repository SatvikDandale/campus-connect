import { GET_POSTS_BY_USERNAME } from "../actionTypes";

export function getPosts(posts) {
  return {
    type: GET_POSTS_BY_USERNAME,
    posts,
  };
}
