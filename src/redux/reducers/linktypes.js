import { ADD_LINKTYPE, EDIT_LINKICON, EDIT_LINKTYPE, GET_LINKTYPES } from "../constants";


const initialState = {
  linktypes: []
};

const linktypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LINKTYPES:
      return {
        ...state
      }
    case ADD_LINKTYPE:
      return {
        ...state
      }
    case EDIT_LINKTYPE:
      return {
        ...state
      }
    case EDIT_LINKICON:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default linktypesReducer;
