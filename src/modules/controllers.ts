import BandModel from "./models/Band";

export const createBand = async (req, res, next) => {
  try {
    const band = new BandModel({
      name: req.body.name,
      id_members: req.body.members,
      past_members: req.body.past_members,
      years_active: req.body.years_active,
      genres: req.body?.geres,
      origin: req.body.origin,
      songs: req.body?.songs,
      id_albums: req.body.id_albums,
    });

    await band.save();

    return res.status(201).json(band);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const profileBand = async (req, res, next) => {
  try {
    const band = await BandModel.find();

    return res.status(200).json(band);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const updateBand = async (req, res, next) => {
  try {
    const data = req.body;
    const body = {
      name: data.name,
      id_members: data.members,
      past_members: data.past_members,
      years_active: data.years_active,
      geres: data.geres,
      origin: data.origin,
      songs: data.songs,
      id_albums: data.id_albums,
    };
    const band = await BandModel.updateOne(
      { _id: req.params.id_band },
      { $set: body }
    );

    return res.status(200).json(band);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const deleteBand = async (req, res, next) => {
  try {
    await BandModel.findByIdAndDelete(req.params.id_band);
    return res.status(200).json("ok");
  } catch (error) {
    return res.status(500).json(error);
  }
};
