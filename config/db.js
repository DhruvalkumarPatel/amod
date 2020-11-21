
const mongoose = require("mongoose");

// Replace this with your mongoURI.
const mongoURI = "mongodb+srv://Dhruval:Mataji@dhruval.keooz.mongodb.net/Dhruval?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
     mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("connected to dhruval MongoDB");
    });

  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;