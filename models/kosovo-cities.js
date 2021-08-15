var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var kosovoCitiesSchema = new Schema({
    name: String,
    description: String
});

var kosovoCities = mongoose.model("KosovoCities", kosovoCitiesSchema);

module.exports = kosovoCities;