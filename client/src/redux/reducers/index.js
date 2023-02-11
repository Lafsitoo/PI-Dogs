import {
  ALL_DOGS,
  SEARCH_DOGS,
  ORDER_SORT,
  order,
  FILTER,
  TEMPERAMENT,
  GET_TEMPERAMENTS,
  GET_DETAILS,
  GET_CLEAN
} from "../constants";

const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  order: order[0],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
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
        dogs: action.payload === "All dogs" ? allSource : filterBySource,
      };

    case TEMPERAMENT:
      const temperament = state.allDogs;
      const filterByTemperament =
        action.payload === "Default"
          ? temperament
          : temperament.filter((e) => e.temperament?.includes(action.payload));
      return {
        ...state,
        dogs: filterByTemperament,
      };

    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };

      case GET_CLEAN:
        return {
          ...state,
          detail: action.payload
        }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
