import { apiCall, serverBaseURL } from "./apiService";
import { addError, removeError } from "../Redux/Actions/errorAction";
import { addLikeToPost, getPosts, addCommentToPost } from "../Redux/Actions/postAction";
import { removeLikeFromPost } from './../Redux/Actions/postAction';

export function getPostsByUserName(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", serverBaseURL + `/posts/${userName}`)
        .then((posts) => {
          dispatch(getPosts(posts));
          dispatch(removeError());
          // console.log("RESOLVING");
          resolve(posts);
        })
        .catch((error) => {
          dispatch(addError(error.response));
          reject(error);
        });
    });
  };
}

export function getPostsForOtherUser(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", serverBaseURL + `/posts/${userName}`)
        .then((posts) => {
          dispatch(removeError());
          // console.log("RESOLVING");
          resolve(posts);
        })
        .catch((error) => {
          dispatch(addError(error.response));
          reject(error);
        });
    });
  };
}

export function createPost(postFormData) {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return apiCall("POST", serverBaseURL + "/post", postFormData, config)
      .then((createdPost) => {
        console.log("Post Created");
        console.log(createdPost);
        resolve(createdPost);
      })
      .catch((error) => {
        console.log("Error creating post");
        console.log(error);
        reject(error);
      });
  });
}

export function addLike(postID, userName){
    return (dispatch) =>{
      return new Promise((resolve, reject) => {
          const data = {
            postID
          }
          return apiCall("POST", serverBaseURL + "/addLike", data)
          .then(() =>{
            dispatch(addLikeToPost(postID, userName));
            dispatch(removeError());
            resolve();
          })
          .catch((error) => {
            console.log(error);
              dispatch(addError(error.response));
              reject();
          })
      }
      )
    } 
}

export function removeLike(postID,userName){
  console.log("REmove like")
  return (dispatch) =>{
    return new Promise((resolve, reject) =>{
      
      const data ={
        postID
      };
      return apiCall("POST", serverBaseURL + "/removeLike", data)
      .then(()=>{
        console.log("IN THEN")
        dispatch(removeLikeFromPost(postID, userName));
        dispatch(removeError());
        resolve();
        
      })
      .catch((error)=>{
              dispatch(addError(error.response));
              reject();
      })
    })
  }
}

export function addComment(commentObj){
  return (dispatch) =>{
    return new Promise((resolve, reject) => {
        return apiCall("POST", serverBaseURL + "/addComment", commentObj)
        .then((newCommentObj) =>{
          dispatch(addCommentToPost(newCommentObj));
          dispatch(removeError());
          resolve();
        })
        .catch((error) => {
          console.log(error);
            dispatch(addError(error.response));
            reject();
        })
    }
    )
  } 
}