var mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    "mongodb+srv://olcan:OcN510.mZo@cluster0.gzdj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useMongoClient: true }
  );

  mongoose.connection.on("open", () => {
    console.log("MongoDB: Connected");
  });
  mongoose.connection.on("error", (err) => {
    console.log("MongoDB: Error", err);
  });

  mongoose.Promise = global.Promise;
};
