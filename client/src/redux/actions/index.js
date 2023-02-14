import axios from "axios";
import {
  ALL_DOGS,
  SEARCH_DOGS,
  ORDER_SORT,
  FILTER,
  TEMPERAMENT,
  GET_TEMPERAMENTS,
  GET_DETAILS,
  GET_CLEAN
} from "../constants/index";
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

export const getTemperaments = () => {
  return async (dispatch) => {
    const json = await axios(`${url}/temperaments`);
    const temperaments = json.data;
    dispatch({
      type: GET_TEMPERAMENTS,
      payload: temperaments,
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
    payload,
  };
};

export const filterTemperament = (payload) => {
  return {
    type: TEMPERAMENT,
    payload,
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    const json = await axios(`${url}/dogs/${id}`);
    dispatch({
      type: GET_DETAILS,
      payload: json.data,
    });
  };
};

export const getClean = () => {
  return {
    type: GET_CLEAN,
    payload: [],
  };
}

export const postDog = (payload) => {
  return async (dispatch) => {
    const post = await axios.post(`${url}/dogs`, payload)
    return post
  }
}