module.exports = () => {
  const mongoose = require("mongoose");

  const MONGO_CONNECTION_STRING =
    process.env.MONGO_CONNECTION_STRING || "mongodb://mongo:27017/db";

  mongoose.connect(MONGO_CONNECTION_STRING);

  mongoose.connection.once("connected", () =>
    console.log("Database connection established")
  );
  mongoose.connection.once("disconected", () =>
    console.log("Database connection interrupted")
  );

  mongoose.connection.on("error", (error) => {
    console.error("Database connection error", error);
    process.exit(1);
  });

  return mongoose.connection;
};
