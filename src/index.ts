import express from "express";
import routes from "./routes";
import cors from "cors";
import mongoose from "mongoose";
const PORT = process.env.PORT || 4000;
const app = express();

mongoose.connection.once("open", () => {
  console.log("db connected!");
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log("running");
});
