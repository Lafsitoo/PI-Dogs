const { Dog } = require("../db");

const validateDogs = async (req, res, next) => {
  // Info pedida
  const {
    name,
    height,
    weight,
    life_span,
    temperament
  } = req.body;

  console.log(req.body)

  //VALIDACIÓN
  if (
    !(name,
    height,
    weight,
    life_span)
  ) {
    return res.status(404).send({ error: "Faltan parámetros obligatorios" });
  }

  if (temperament.length == 0) {
    return res.status(404).send({ error: "Falta temperamento/s obligatorio" });
  }

  // Name duplicado
  const findDog = await Dog.findAll({ where: { name: name } });
  if (findDog.length != 0) {
    return res.send(`El nombre ${name} ya esta en uso`);
  }

  // Si todo OK, seguimos
  next();
};

// Exportamos
module.exports = validateDogs;
