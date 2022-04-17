const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const FoodModel = require("./models/Food");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://luizfbmoragas:P4d48iv9!@crud.rmaj7.mongodb.net/food?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.post("/insert", async (req, res) => {
  const foodName = req.body.foodName;
  const days = req.body.days;
  const foodType = req.body.foodType;
  const foodOrigin = req.body.foodOrigin;
  const foodDrink = req.body.foodDrink;

  const food = new FoodModel({
    foodName: foodName,
    expirationDate: days,
    typeOfFood: foodType,
    countryOfOrigin: foodOrigin,
    bestDrinkAsASideDish: foodDrink,
  });

  try {
    await food.save();
    res.send("Inserted data");
  } catch (error) {
    console.log(error);
  }
});

app.get("/read", async (req, res) => {
  FoodModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.put("/update", async (req, res) => {
  const newFoodDrink = req.body.newFoodDrink;
  const id = req.body.id;

  try {
    await FoodModel.findById(id, (err, updatedDrink) => {
      updatedDrink.bestDrinkAsASideDish = newFoodDrink;
      updatedDrink.save();
      res.send("Update");
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await FoodModel.findByIdAndRemove(id).exec();
  res.send("Deleted");
});

app.listen(8080, () => {
  console.log(`Running at port 8080!`);
});
