import { CREATE_ADMIN } from "../constants";


const initialState = null;

const superadminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ADMIN: 
    return {
      ...state
    }
    default:
      return state;
  }
};

export default superadminsReducer;
