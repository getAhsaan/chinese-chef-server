const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const cors = require("cors");

app.use(cors());

// data
const allChefsData = require("../src/data/chefs.json");

router.get("/", (req, res) => {
  res.send("chinese chef hunter server is running..");
});

router.get("/chefs", (req, res) => {
  res.send(allChefsData);
});

router.get("/chef/:id", (req, res) => {
  const chef_id = req.params.id;
  const reqChef = allChefsData.find((chef) => chef.id == chef_id);
  res.send(reqChef || "doesn't exist");
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
