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

let initialState = {
  success: false,
  data: {
    token: window.localStorage.getItem("token") || null,
    admin: JSON.parse(window.localStorage.getItem("admin")) || null
  },
  isAuthenticated: false,
};

const usersReducer = (state = initialState, action) => {
  const { success, messages, data } = action?.payload || {};
  switch (action.type) {
    case FETCH_TOKEN:
      window.localStorage.setItem("token", data?.token);
      window.localStorage.setItem("admin", JSON.stringify(data?.admin));
      return {
        success,
        messages,
        data,
        isAuthenticated: true,
      };
    // case SIGNUP_NEW_USER:
    //   return {
    //     success,
    //     data,
    //     messages, 
    //   };
    case FETCH_TOKEN_FAILED:
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("admin");
      return {
        ...state,
        data: {
          admin: null,
          token: null
        },
        success: false,
        isAuthenticated: false,
      };
      case GET_USERS:
        console.log("in GET_USERS: success, messages, data: ",success, messages, data)
      return {
        ...state,
        data: {
          ...state.data,
          users: data
        },
        success: false,
        isAuthenticated: false,
      };
      case TOGGLE_ACTIVITY:
        console.log("in TOGGLE_ACTIVITY: success, messages, data: ",success, messages, data)
      return {
        ...state,
        success,
        messages
      };
      case GET_USERS:
        console.log("in GET_USERS: success, messages, data: ",success, messages, data)
      return {
        ...state,
        data: {
          ...state.data,
          users: data
        },
        success: false,
        isAuthenticated: false,
      };
      case GET_USERS:
        console.log("in GET_USERS: success, messages, data: ",success, messages, data)
      return {
        ...state,
        data: {
          ...state.data,
          users: data
        },
        success: false,
        isAuthenticated: false,
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
    case TOKEN_REMOVE:
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
      return {
        ...state,
        data: {
          token: null,
          admin: null,
        },
        success: true,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
