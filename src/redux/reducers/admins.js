import { GET_ADMINS } from "../constants";


const initialState = {
  admins: []
};

const adminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMINS:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default adminsReducer;
