const express = require("express");
const axios = require("axios");
const ejs = require("ejs");
require("dotenv").config();

const app = express();
const API_KEY = process.env.SPOON_API;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/search", async (req, res) => {
  const { query } = req.body;
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`,
  );
  const recipes = response.data.results;
  res.render("results", { recipes });
});

app.get("/recipe/:id", async (req, res) => {
  const { id } = req.params;
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
  );
  const recipe = response.data;
  res.render("recipe", { recipe });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running");
});
