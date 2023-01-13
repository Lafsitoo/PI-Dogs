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
    const split = await base.join().split(",")
    const temperaments = await split.map(el => el.trim())
    // Guardamos en DB
    temperaments.forEach((el) => {
      Temperament.findOrCreate({
        where: { name: el },
      });
    });
    // Buscamos los temperament y enviamos
    const allTemperaments = await Temperament.findAll()
    res.status(201).send(allTemperaments)   
  } catch (error) {
    res.status(400).send({ error: error.menssage });
  }
});

// Exportamos
module.exports = router;
