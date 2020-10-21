import {
  INIT_USER,
  INIT_OTHER_USER,
  LOAD_SELF_USER,
  SELF_USER_LOADED,
  OTHER_USER_LOADED,
  LOAD_OTHER_USER,
  UPDATE_NAME,
  UPDATE_BIO,
  UPDATE_PERSONAL_DETAILS,
  UPDATE_USER,
} from "../actionTypes";

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
