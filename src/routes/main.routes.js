const express = require("express");

const router = express.Router();

const controller = require("../controllers/mainController");

router.get("/", controller.home);

router.get("/search/books", controller.search);

router.get("/search/books/:id", controller.searchById)

module.exports = router;