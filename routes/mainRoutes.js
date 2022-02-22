const express = require ("express");
const controlador = require("../controllers/mainControllers");


const router = express.Router();


router.get("/", controlador.index);
router.get("/about", controlador.us);

module.exports = router;