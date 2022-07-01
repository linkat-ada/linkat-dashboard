import {
  SIGNUP_NEW_USER,
  FETCH_TOKEN,
  FETCH_TOKEN_FAILED,
  TOKEN_REMOVE,
  GET_USERS,
  GET_USERINFO,
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
  UPDATE_USERNAME,
  UPDATE_EMAIL,
  UPDATE_PROFILEPIC,
  UPDATE_BGPIC,
  DELETE_USER,
  TOGGLE_ACTIVITY
} from "../constants";

let initialState =
{
  data: [],
  success: false
};

const usersReducer = (state = initialState, action) => {
  const { success, messages, data } = action?.payload || {};
  switch (action.type) {
    case GET_USERS:
      console.log("in GET_USERS: success, messages, data: ", success, messages, data)
      return {
        ...state,
        data: {
          ...state.data,
          users: data
        },
        success: true,
      };
    case TOGGLE_ACTIVITY:
      console.log("in TOGGLE_ACTIVITY: success, messages, data: ", success, messages, data)
      return {
        ...state,
        success,
        messages
      };
    case DELETE_USER:
      console.log("in TOGGLE_ACTIVITY: success, messages, data: ", success, messages, data)
      return {
        ...state,
        success,
        messages
      };
    // case GET_USERINFO:
    //   return {
    //     ...state,
    //     success: true,
    //     isAuthenticated: true,
    //     data : {
    //       ...data,
    //       user:JSON.stringify(action?.payload)
    //     }
    //   };
    // case UPDATE_PROFILEPIC:
    //   return {
    //     ...state,
    //     userInfo: [ ...state.userInfo]
    //   };
    default:
      return state;
  }
};

export default usersReducer;
