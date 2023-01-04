const axios = require("axios");
const { API_KEY } = process.env;
const API_ALL_URL = "https://api.thedogapi.com/v1/breeds";
// Traigo los modelos
const { Dog, Temperament } = require("../models");

// DATOS (API)
const getApiAll = async () => {
  const apiUrl = await axios(API_ALL_URL);
  // Reducimos la info
  const apiData = await apiUrl.data.map((el) => {
    return {
      id: el.id,
      name: el.name,
      image: el.image.url,
      height_min: parseInt(el.height.imperial.split("-")[0]),
      height_max: parseInt(el.height.imperial.split("-")[1]),
      weight_min: parseInt(el.weight.imperial.split("-")[0]),
      weight_max: parseInt(el.weight.imperial.split("-")[1]),
      life_span: el.life_span,
      temperament: el.temperament,
    };
  });
  // Retornamos
  return apiData;
};

// DATOS (DB)
const getInfoDb = async () => {
  return await Dog.findAll({
    // Incluimos el modelo de Temperament
    includes: {
      model: Temperament,
      attributes: ["name"],
      // Sobre esta tabla
      through: {
        attributes: [],
      },
    },
  });
};

// UNION DE DATOS
const getAllDogs = async () => {
  const apiInfo = await getAllApi();
  const dbInfo = await getInfoDb();
  const allDogs = apiInfo.concat(dbInfo);
  return allDogs;
};

// Exportamos
module.exports = {
  getAllDogs,
};
