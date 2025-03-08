import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { register } from "./conrollers/authControllers.js";
let app = express();

dotenv.config();
app.use(express.json());

app.post("/register", register);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDb Connected...");
    app.listen(process.env.PORT, () => {
      console.log(`server start at ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
