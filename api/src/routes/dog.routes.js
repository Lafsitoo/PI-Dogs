const { Router } = require("express");
const { getAllDogs } = require("../controllers");
const router = Router();

// OBTENER TODOS LOS PERROS
// OBTENER POR NOMBRE
router.get("/", async (req, res) => {
  // Verificamos si nos mandan un nombre
  const { name } = req.query;
  try {
    const allDogs = await getAllDogs();
    if (name) {
      // Reducimos los errores de comparación
      const dogName = allDogs.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      dogName.length
        ? res.status(200).json(dogName)
        : res.status(404).send({
            error: `No se ha encuentrado ${name} en nuestra bibloteca`,
          });
    } else {
      // Sino devolvemos todos los perros
      res.status(200).send(allDogs);
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

// OBTENER POR ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dogsTotal = await getAllDogs();
    // ¿Hay ID?
    if (id) {
      const dogID = await dogsTotal.filter((e) => e.id == id);
      dogID.length
        ? res.status(200).send(dogID)
        : res.status(404).send({ error: "La ID no esta relacionada a ningún ejemplar" });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {});

// Exportamos
module.exports = router;
