import { apiCall, serverBaseURL } from "./apiService";
import { addError, removeError } from "../Redux/Actions/errorAction";
import { addLikeToPost, getPosts, addCommentToPost, removeLikeFromPost,  getAllComments } from "../Redux/Actions/postAction";

export function getPostsByUserName(userName) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("GET", `/posts/${userName}`)
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
      return apiCall("GET", `/posts/${userName}`)
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
    return apiCall("POST", "/post", postFormData, config)
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
          return apiCall("POST", "/addLike", data)
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
      return apiCall("POST", "/removeLike", data)
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
        return apiCall("POST", "/addComment", commentObj)
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
export function getAllCommentsFromPost(postID){
  console.log("GET all comments")
  console.log(postID)
  return (dispatch) =>{
    return new Promise((resolve, reject) =>{
      return apiCall("GET", `/comments/${postID}`)
      .then((allCommentsObj) =>{
        dispatch(getAllComments(allCommentsObj, postID));
        dispatch(removeError());
        resolve();
      })
      .catch((error) =>{
        dispatch(addError(error.response));
            reject();
      })
    })
    
  }
}

export function reportPost(postID) {
  return new Promise((resolve, reject) => {
    return apiCall("POST", `/reportPost/${postID}`)
    .then(() => {
      console.log("Post Reported")
      resolve();
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    })
  })
}

export function getReportedPosts(collegeName) {
  return new Promise((resolve, reject) => {
    return apiCall("GET", `/reportPost/${collegeName}`)
    .then((posts) => {
      resolve(posts);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    })
  })
}
export function getPost(postId) {
  return new Promise((resolve, reject) => {
    return apiCall("GET", `/post/${postId}`)
    .then((post) => {
      resolve(post);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    })
  })
}