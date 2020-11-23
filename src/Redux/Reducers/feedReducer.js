import { INIT__FEED } from "../actionTypes";

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
    default:
      return state;
  }
};
