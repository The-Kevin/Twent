import express from "express";
import routes from "./routes";
import cors from "cors";
import mongoose from "mongoose";
import serverless from "serverless-plugin-typescript";

import * as dotenv from "dotenv";

const PORT = process.env.PORT || 4000;
const app = express();

dotenv.config();

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("db connected!");
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log("running");
});

//module.exports.handler = serverless(app);
