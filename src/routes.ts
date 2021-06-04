import { Router } from "express";
import text from "./pages/inicio";
const routes = Router();

routes.get("/", (req, res) => res.json(text));

routes.get("/banda");
export default routes;
