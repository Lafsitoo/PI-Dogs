import axios from "axios";
import { ALL_DOGS, SEARCH_DOGS, ORDER_SORT, FILTER } from "../constants/index";
const url = "http://localhost:3001";

export const getAllDogs = () => {
  return async (dispatch) => {
    const json = await axios(`${url}/dogs`);
    const dogs = json.data;
    dispatch({
      type: ALL_DOGS,
      payload: dogs,
    });
  };
};

export const searchDogs = (name) => {
  return async (dispatch) => {
    const json = await axios(`${url}/dogs?name=${name}`);
    dispatch({
      type: SEARCH_DOGS,
      payload: json.data,
    });
  };
};

export const orderSort = (payload) => {
  return {
    type: ORDER_SORT,
    payload,
  };
};

export const filter = (payload) => {
  return {
    type: FILTER,
    payload
  };
};
