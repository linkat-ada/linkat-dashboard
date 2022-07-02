import { CHANGE_ROLE, DELETE_ADMIN, GET_ADMINS } from "../constants";


const initialState = {
  admins: []
};

const adminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMINS:
      return {
        ...state
      }
    case CREATE_ADMIN:
      return {
        ...state
      }
    case CHANGE_ROLE:
      return {
        ...state
      }
    case DELETE_ADMIN:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default adminsReducer;
