import axios from "axios";
import { ALL_DOGS, SEARCH_DOGS } from "../constants/index";
const url = "http://localhost:3001";

export const getAllDogs = () => {
  return async (dispatch) => {
    const { json } = await axios(`${url}/dogs`);
    dispatch({
      type: ALL_DOGS,
      payload: json.data,
    });
  };
};

export const searchDogs = (name) => {
  return async (dispatch) => {
    const { json } = await axios(`${url}/dogs?name=${name}`);
    dispatch({
      type: SEARCH_DOGS,
      payload: json.data,
    });
  };
};
