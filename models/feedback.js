var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  message: String,
  createdAt: Date,
});

var feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = feedback;
