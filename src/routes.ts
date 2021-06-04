import { Router } from "express";
import text from "./pages/inicio";
import {
  createBand,
  profileBand,
  updateBand,
  deleteBand,
} from "./modules/controllers";

const router = Router();

router.route("/").get((req, res) => res.json(text));

router.route("/band").get(profileBand).post(createBand);

router.route("/band/:id_band").patch(updateBand).delete(deleteBand);
export default router;
