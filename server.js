if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.REACT_APP_PORT || 3000;
const URL_P1 = process.env.REACT_APP_MONGODB_ATLAS_DATABASE_URL_PRE;
const URL_P2 = process.env.REACT_APP_MONGODB_ATLAS_USERNAME;
const URL_P3 = process.env.REACT_APP_MONGODB_ATLAS_PASSWORD;
const URL_P4 = process.env.REACT_APP_MONGODB_ATLAS_DATABASE_URL_POST;
const URL_P5 = process.env.REACT_APP_MONGODB_ATLAS_DATABASE_NAME;
const MONGODB_ATLAS_DATABASE_URL =
  URL_P1 + URL_P2 + ":" + URL_P3 + URL_P4 + URL_P5 || LOCAL_DATABASE_URL;
const LOGIN_ROUTE = require("./src/controllers/authenticationRoute");
const cors = require("cors");

mongoose.connect(
  MONGODB_ATLAS_DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Database connected...")
);
// Middleware(express.json and cors) - activated body-parser in the app
app.use(express.json());
app.use(cors());

app.use("/app", LOGIN_ROUTE);
app.listen(PORT, () => {
  console.log(`[Port: ${PORT}] - The app server is up and running...`);
});
