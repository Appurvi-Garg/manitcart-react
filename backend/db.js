const mongoose = require("mongoose");

const connectDB = async () => {

  try {

    await mongoose.connect(
      "mongodb+srv://manitcart:Appu_Garg29@cluster0.gyeed8l.mongodb.net/?appName=Cluster0"
    );

    console.log("MongoDB Connected");

  } catch (error) {

    console.log(error);

  }

};

module.exports = connectDB;