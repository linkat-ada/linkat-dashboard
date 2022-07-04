import {
  GET_USERS,
  DELETE_USER,
  TOGGLE_ACTIVITY,
  GET_USERLINKS,
  DELETE_LINK
} from "../constants";

let initialState = {
  data: [],
  success: false,
  messages: ''
};

const usersReducer = (state = initialState, action) => {
  const { success, messages, data, userId = null } = action?.payload || {};
  switch (action.type) {
    case GET_USERS:
      console.log("in GET_USERS: success, messages, data: ", success, messages, data)
      return {
        ...state,
        data: [
          ...data
        ],
        success: true,
        messages
      };
    case TOGGLE_ACTIVITY:
      console.log("in TOGGLE_ACTIVITY: success, messages, data: ", success, messages, data)
      return {
        ...state,
        success,
        messages
      };
    case DELETE_USER:
      console.log("in DELETE_USER: success, messages, data: ", success, messages, data)
      const temp = [...state.data];
      const index = temp.findIndex(user => user.id == userId);
      index && temp.splice(index, 1)
      return {
        ...state,
        data: temp,
        success,
        messages
      };
    case GET_USERLINKS:
      console.log("in GET_USERLINKS: success, messages, data: ", success, messages, data)
      let tempData = state.data;
      let userIndex = tempData.findIndex(user => user.id == data.userId);
      tempData[userIndex].links = data;
      return {
        ...state,
        data: tempData,
        success,
        messages
      }
    case DELETE_LINK:
      console.log("in DELETE_LINK: success, messages, data: ", success, messages, data)
      let tempUsers = state.users;
      let tempUserIndex = tempUsers.findIndex(user => user.id == data.userId);
      tempUsers[tempUserIndex].links.filter(link => link.id != data.id)
      return {
        ...state,
        data: tempUsers,
        success,
        messages
      }
    default:
      return state;
  }
};

export default usersReducer;
