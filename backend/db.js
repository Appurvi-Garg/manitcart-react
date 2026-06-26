const mongoose = require("mongoose");

const connectDB = async () => {

  try {

    await mongoose.connect(
  "mongodb://manitcart:up19APPU@ac-kkyyczb-shard-00-00.gyeed8l.mongodb.net:27017,ac-kkyyczb-shard-00-01.gyeed8l.mongodb.net:27017,ac-kkyyczb-shard-00-02.gyeed8l.mongodb.net:27017/?ssl=true&replicaSet=atlas-29rvce-shard-0&authSource=admin&appName=Cluster0"
);
    console.log("MongoDB Connected");

  } catch (error) {

    console.log(error);

  }

};

module.exports = connectDB;