import { INIT__FEED } from "../actionTypes";

export function initFeed(feed) {
  return {
    type: INIT__FEED,
    feed,
  };
}
