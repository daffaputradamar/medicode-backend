const router = require("./api/config/routes");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");

require("./api/config/db");

const app = express();

app.use(logger("tiny"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(router);

app.listen(process.env.PORT || 5000, () => console.log("Server Running"));
