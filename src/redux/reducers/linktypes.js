import { GET_LINKTYPES } from "../constants";


const initialState = {
  linktypes: []
};

const linktypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LINKTYPES: 
      return {
        ...state
      }
    default:
      return state;
  }
};

export default linktypesReducer;
