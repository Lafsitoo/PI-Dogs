const { Router } = require("express");
const { Temperament } = require("../db");
const API_URL = "https://api.thedogapi.com/v1/breeds";
const axios = require("axios");

const router = Router();

// OOBTENER TODOS LOS TEMPERAMENTS
router.get("/", async (req, res) => {
  const apiInfo = await axios(API_URL);
  try {
    const base = await apiInfo.data.map((el) => el.temperament);
    // Separamos
    const split = await base.join().split(",");
    // Eliminamos espacios en blanco
    const temperaments = await split.map((el) => el.trim());
    // Comprobamos ya existen esos nombres
    for (const temperament of temperaments) {
      const existingTemperament = await Temperament.findOne({
        where: { name: temperament },
      });
      // Guardamos en DB
      if (!existingTemperament) {
        await Temperament.create({ name: temperament });
      }
    }
    // Buscamos los temperament y enviamos
    const allTemperaments = await Temperament.findAll();
    res.status(201).send(allTemperaments);
  } catch (error) {
    res.status(400).send({ error: error.menssage });
  }
});

// Exportamos
module.exports = router;
