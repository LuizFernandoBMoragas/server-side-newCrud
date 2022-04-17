const express = require("express");
const mongoose = require("mongoose");
const app = express();

const FoodModel = require("./models/Food");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://luizfbmoragas:P4d48iv9!@crud.rmaj7.mongodb.net/food?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.get("/", async (req, res) => {
  const food = new FoodModel({
    foodName: "Paella",
    expirationDate: 3,
    typeOfFood: "Candy",
    countryOfOrigin: "Spain",
  });

  try {
    await food.save();
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, () => {
  console.log(`Running at port 8080!`);
});
