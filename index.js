const express = require("express");
const app = express();
const db = require("mongoose");

app.get("/", (req, res) => {});
app.post("/", (req, res) => {});
app.put("/", (req, res) => {});
app.delete("/", (req, res) => {});

app.listen(8080, () => {
  `Running at port 8080!`;
});
