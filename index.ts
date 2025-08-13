import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

app.get("/", (_req, res) => {
  res.send("VisaNetPay API is running!");
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});