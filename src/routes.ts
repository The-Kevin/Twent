import { Router } from "express";
import text from "./pages/inicio";
import {
  createBand,
  profileBand,
  updateBand,
  deleteBand,
  createMember,
  listMembers,
  updateMembers,
  deleteMember,
  createAlbum,
  listAlbums,
  updateAlbum,
  deleteAlbum,
} from "./modules/controllers";

const router = Router();

router.route("/").get((req, res) => res.json(text));

router.route("/band").get(profileBand).post(createBand);

router.route("/band/:id_band").patch(updateBand).delete(deleteBand);

router.route("/band/members").get(listMembers).post(createMember);
router
  .route("/band/members/:id_member")
  .patch(updateMembers)
  .delete(deleteMember);
router.route("/band/albums").get(listAlbums).post(createAlbum);
router.route("/band/albums/:id_album").patch(updateAlbum).delete(deleteAlbum);

export default router;
