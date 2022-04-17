const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: Number,
    required: true,
  },
  typeOfFood: {
    type: String,
    required: true,
  },
  countryOfOrigin: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
