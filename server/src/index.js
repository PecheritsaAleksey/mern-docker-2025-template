require("dotenv").config();
const express = require("express");
const cors = require("cors");
const database = require("./database");
const api = require("./api/routes");

const app = express();
database();

app.use(express.json());
app.use(cors());
app.use("/api", api);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
