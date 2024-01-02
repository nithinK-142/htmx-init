import express from "express";

const router = express.Router();

// poll
let counter = 0;

router.get("/poll", (req, res) => {
  counter++;
  const data = { value: counter };
  res.send(`<p>${data.value}</p>`);
});

// get-weather
let currentTemperature = 20;

router.get("/", (req, res) => {
  currentTemperature += Math.random() * 2 - 1;
  res.send(currentTemperature.toFixed(1) + "°C");
});

export default router;
