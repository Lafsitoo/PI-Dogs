import { ALL_DOGS, SEARCH_DOGS, ORDER_SORT, order } from "../constants";

const initialState = {
  dogs: [],
  order: order[0],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };

    case SEARCH_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };

    case ORDER_SORT:
      return {
        ...state,
        dogs: state.dogs.slice().sort(action.payload.sort),
        order: order[action.payload.id],
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
