var Cities = require("../models/kosovo-cities");
var express = require("express");
var router = express.Router();

/* Cities Listeleme Islemi Burada Yapilacak. */
router.get("/", function (req, res, next) {
  Cities.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.post("/", function (req, res, next) {
//   new Cities({
//     name: req.body.name,
//     description: req.body.description,
//   })
//     .save()
//     .then(() => {
//       res.json("Kaydetme İşlemi Başarılı.");
//     })
//     .catch((err) => {
//       res.json("Kaydetme İşleminde Hata Oluştu.");
//     });
// });

module.exports = router;
