import { SEARCH_DOGS } from "../constants";

const initialState = {
  dogs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
