import express from "express";
import routes from "./routes";
import cors from "cors";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log("running");
});
