import { ADD_OWN_POST, INIT__FEED } from "../actionTypes";

export function initFeed(feed) {
  return {
    type: INIT__FEED,
    feed,
  };
}
export function addOwnPost(post) {
  return {
    type: ADD_OWN_POST,
    post
  }
}