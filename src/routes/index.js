const { Router } = require("express");
const router = Router();

//Raiz
router.get("/", (req, res) => {
  res.json({
    Title: "Hola mundo usando rutas!",
  });
});

router.get("/:id", (req, res) => {
  res.json({
    Title: "Hola mundo usando rutas! " + req.params.id,
  });
});

module.exports = router;
