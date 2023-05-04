const express = require("express");
const app = express();
const port = 5000;

// data
const allChefsData = require("./chefs.json");

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chefs", (req, res) => {
  res.send(allChefsData);
});

app.listen(port, () => {
  console.log(`chinese recipe hunter server running... ${port}`);
});
