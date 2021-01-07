import {
  INIT_USER,
  INIT_OTHER_USER,
  LOAD_SELF_USER,
  SELF_USER_LOADED,
  OTHER_USER_LOADED,
  LOAD_OTHER_USER,
  UPDATE_USER,
  ADD_USER_FOLLOWING_DATA,
  FOLLOW_USER,
  ADD_FOLLOWING_DATA_OTHER,
  UNFOLLOW_USER,
  RESET,
  RESET_OTHER_USER,
  ADD_MEMBER,
  REMOVE_MEMBER,
} from "../actionTypes";

export function reset() {
  return {
    type: RESET
  }
}

export function resetOtherUser() {
  return {
    type: RESET_OTHER_USER
  }
}

export function initUser(userObject) {
  return {
    type: INIT_USER,
    userObject,
  };
}
export function initOtherUser(userObject) {
  return {
    type: INIT_OTHER_USER,
    userObject,
  };
}
export function startLoadingSelfUser() {
  return {
    type: LOAD_SELF_USER,
  };
}
export function selfUserLoaded() {
  return {
    type: SELF_USER_LOADED,
  };
}

export function startLoadingOtherUser() {
  return {
    type: LOAD_OTHER_USER,
  };
}

export function otherUserLoaded() {
  return {
    type: OTHER_USER_LOADED,
  };
}

export function updateUser(userObject) {
  return {
    type: UPDATE_USER,
    userObject,
  };
}

export function addUserFollowingData(data) {
  return {
    type: ADD_USER_FOLLOWING_DATA,
    data,
  };
}

export function followUserDone(following) {
  return {
    type: FOLLOW_USER,
    following,
  };
}
export function unFollowUserDone(following) {
  return {
    type: UNFOLLOW_USER,
    following,
  };
}

export function addFollowingDataOther(data) {
  return {
    type: ADD_FOLLOWING_DATA_OTHER,
    data,
  };
}

export function addMember(data) {
  return {
    type: ADD_MEMBER,
    data
  }
}
export function removeMember(data) {
  return {
    type: REMOVE_MEMBER,
    data
  }
}

// export function updateName(nameObject) {
//   return {
//     type: UPDATE_NAME,
//     nameObject,
//   };
// }
// export function updateBio(bio) {
//   return {
//     type: UPDATE_BIO,
//     bio,
//   };
// }
// export function updatePersonalDetails(personalDetails) {
//   return {
//     type: UPDATE_PERSONAL_DETAILS,
//     personalDetails,
//   };
// }
