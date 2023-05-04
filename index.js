const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

// data
const allChefsData = require("./chefs.json");

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chefs", (req, res) => {
  res.send(allChefsData);
});

app.get("/chef/:id", (req, res) => {
  const chef_id = req.params.id;
  const reqChef = allChefsData.find((chef) => chef.id == chef_id);
  res.send(reqChef || "doesn't exist");
});

app.listen(port, () => {
  console.log(`chinese recipe hunter server running... ${port}`);
});
