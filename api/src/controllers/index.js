const axios = require("axios");
const { API_KEY } = process.env;
const API_ALL_URL = "https://api.thedogapi.com/v1/breeds";
// Traigo los modelos
const { Dog, Temperament } = require("../models");

// DATOS
const getApiAll = async () => {
  const apiUrl = await axios(API_ALL_URL);
};
