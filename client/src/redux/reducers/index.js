import { ALL_DOGS, SEARCH_DOGS, ORDER_SORT, order, FILTER } from "../constants";

const initialState = {
  dogs: [],
  allDogs: [],
  order: order[0],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload
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
    
    case FILTER:
      const allSource = state.allDogs;
      const filterBySource =
        action.payload === "Created by Users"
          ? allSource.filter((el) => el.createdInDb)
          : allSource.filter((el) => !el.createdInDb);
      return {
        ...state,
        dogs: action.payload === "All dogs" ? allSource : filterBySource
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
