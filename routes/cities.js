var Cities = require("../models/kosovo-cities");
var express = require("express");
var router = express.Router();

/* Cities Listeleme Islemi Burada Yapilacak. */
router.get("/", (req, res, next) => {
  Cities.find()
    .then((cities) => {
      res.status(200).json(cities);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res, next) => {
  Cities.findById(req.params.id)
    .then((cities) => {
      res.status(200).json(cities);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
