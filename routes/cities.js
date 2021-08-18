var Cities = require("../models/kosovo-cities");
var express = require("express");
var router = express.Router();

/* Cities Listeleme Islemi Burada Yapilacak. */
router.get("/", function (req, res, next) {
  Cities.find()
    .then((cities) => {
      res.json(cities);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
