require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { join } = require("path");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(routes);

const port = process.env.APP_PORT || 3333;

app.listen(port, () => {
  console.log(`Listening on port ${process.env.APP_URL}:${port}`);
});