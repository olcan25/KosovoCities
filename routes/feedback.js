var Feedback = require("../models/feedback");
var express = require("express");
var router = express.Router();

/* Feedbacks Listeleme Islemi Burada Yapilacak. */
router.get("/", (req, res, next) => {
  Feedback.find()
    .then((feedbacks) => {
      res.status(200).json(feedbacks);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Tek Bir feeedbakc Getirma
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Feedback.findById(id)
    .then((feedback) => {
      res.status(200).json(feedback);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Ekleme Islemi
router.post("/", (req, res, next) => {
  let feedback = new Feedback({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    message: req.body.message,
    createdAt: Date.now(),
  });
  
  if(feedback.firstName&&feedback.lastName&&feedback.message){
    feedback.save(function (err, feedback) {
        if (err) res.send(err);
        else res.send({ status: 200, message: "Eklendi", data: feedback });
      });
  }
  else{
      res.send({ status: 500, message: "First Name, Last Name Or Mesaage is Empty"})
  }
});

module.exports = router;
