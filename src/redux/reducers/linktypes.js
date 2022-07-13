import {
  ADD_LINKTYPE,
  EDIT_LINKICON,
  EDIT_LINKTYPE,
  GET_LINKTYPES
} from "../constants";


const initialState = {
  data: [],
  success: false,
  messages: ''
};

const linktypesReducer = (state = initialState, action) => {
  const { success, messages, data, type } = action?.payload || {};

  switch (action.type) {
    case GET_LINKTYPES:
      console.log("in GET_LINKTYPES: success, messages, data: ", success, messages, data)
      return {
        ...state,
        data: [
          ...data
        ],
        success: true,
        messages
      };
    case ADD_LINKTYPE:
      console.log("action.payload: ", action.payload)
      const tempData = [...state.data]
      tempData.push({ type: type })
      console.log("tempData: ", tempData)
      return {
        ...state,
        data: tempData,
        success,
        messages
      }
    case EDIT_LINKTYPE:
      console.log("action.payload: ", action.payload)
      const tempDataType = [...state.data]
      const index = tempDataType.findIndex(type => type.id == action.payload.linktype.id)
      tempDataType[index].type = type;
      console.log("tempData: ", tempDataType)
      return {
        ...state,
        data: tempDataType,
        success,
        messages
      }
    case EDIT_LINKICON:
      return {
        ...state,
        success,
        messages
      }
    default:
      return state;
  }
};

export default linktypesReducer;
