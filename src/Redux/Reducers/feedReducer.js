import { ADD_COMMENT, ADD_LIKE, ADD_OWN_POST, INIT__FEED } from "../actionTypes";
import {
  REMOVE_LIKE,
  GET_ALL_COMMENTS as GET_ALL_COMMENTS,
} from "./../actionTypes";

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
      let newFeed = [...state.feed];
      let index = newFeed.findIndex((post) => action.postID === post.postID);
      let post = newFeed[index];
      if (!post.likes) post.likes = [action.userName];
      else post.likes = [...post.likes, action.userName];
      newFeed[index] = post;
      return {
        ...state,
        feed: newFeed,
      };

    case REMOVE_LIKE:
      let tempFeed = [...state.feed];
      let tempIndex = tempFeed.findIndex(
        (post) => action.postID === post.postID
      );
      let tempPost = tempFeed[tempIndex];
      if (tempPost.likes) {
        let likeIndex = tempPost.likes.indexOf(action.userName);
        tempPost.likes.splice(likeIndex, 1);
      }
      console.log("TempPost:");
      console.log(tempPost);
      tempFeed[tempIndex] = tempPost;
      return {
        ...state,
        feed: tempFeed,
      };

    case ADD_COMMENT:
      let newFeedForComment = [...state.feed];
      let indexForComment = newFeedForComment.findIndex(
        (post) => action.commentObj.postID === post.postID
      );
      let postForComment = newFeedForComment[indexForComment];
      if (postForComment.comments) {
        postForComment.comments = [
          ...postForComment.comments,
          action.commentObj,
        ];
      } else {
        postForComment.comments = [action.commentObj];
      }
      newFeedForComment[indexForComment] = postForComment;
      return {
        ...state,
        feed: newFeedForComment,
      };

    case GET_ALL_COMMENTS:
      console.log(action.allComments);
      let allCommentsFeed = [...state.feed];
      let indexAllComment = allCommentsFeed.findIndex(
        (post) => action.postID === post.postID
      );
      let postAllComments = allCommentsFeed[indexAllComment];
      postAllComments.comments = action.allComments;
      allCommentsFeed[indexAllComment] = postAllComments;
      return {
        ...state,
        feed: allCommentsFeed,
      };

    case ADD_OWN_POST:
      return {
        ...state,
        feed: [action.post, ...state.feed]
      }

    default:
      return state;
  }
};
