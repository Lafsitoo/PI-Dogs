const { Router } = require("express");
const router = Router();

// RUTAS
const dogs = require("./dog.routes");
const temperament = require("./temperament.routes")

// PUERTOS
router.use("/dogs", dogs);
router.use("/temperaments", temperament)

// Exportamos
module.exports = router;
