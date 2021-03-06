import BandModel from "./models/Band";
import MemberModel from "./models/Member";
import AlbumsModel from "./models/Albums";

export const createBand = async (req, res, next) => {
  try {
    const band = new BandModel({
      name: req.body.name,
      id_members: req.body.members,
      past_members: req.body.past_members,
      years_active: req.body.years_active,
      genres: req.body?.geres,
      origin: req.body.origin,
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
    const data = await BandModel.find();

    const band = data.map((obj) =>
      obj.populate({ path: "id_members" }).populate({ path: "id_albums" })
    );
    return res.status(200).json(band);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const updateBand = async (req, res, next) => {
  try {
    const data = req.body;
    const body = {
      name: data?.name,
      id_members: data?.members,
      past_members: data?.past_members,
      years_active: data?.years_active,
      geres: data?.geres,
      origin: data?.origin,
      id_albums: data?.id_albums,
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

// ================ members =====================

export const createMember = async (req, res, next) => {
  try {
    const data = req.body;
    const member = new MemberModel({
      name: data.name,
      country: data?.country,
      years: data.years,
      intruments: data?.intruments,
      spouse: data.spouse,
    });

    await member.save();

    return res.status(201).json(member);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const listMembers = async (req, res, next) => {
  try {
    const members = await MemberModel.find();

    return res.status(200).json(members);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateMembers = async (req, res, next) => {
  try {
    const data = req.body;

    const body = {
      name: data?.name,
      country: data?.country,
      years: data?.years,
      instruments: data?.instruments,
      spouse: data?.spouse,
    };
    await MemberModel.updateOne({ _id: req.params.id_member }, { $set: body });
    const member = await MemberModel.findById(req.params.id_member);

    return res.status(200).json(member);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const deleteMember = async (req, res, next) => {
  try {
    await MemberModel.deleteOne({ _id: req.params.id_member });

    return res.status(200).json("ok");
  } catch (error) {
    return res.status(500).json(error);
  }
};

//================== albums ===================

export const createAlbum = async (req, res, next) => {
  try {
    const data = req.body;
    const album = new AlbumsModel({
      name: data.name,
      data: data.data,
      url_img: data.url_img,
      songs: data.songs,
    });

    await album.save();

    return res.status(201).json(album);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const listAlbums = async (req, res, next) => {
  try {
    const albums = await AlbumsModel.find();

    return res.status(200).json(albums);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const updateAlbum = async (req, res, next) => {
  try {
    const data = req.body;

    const body = {
      name: data?.name,
      data: data?.data,
      url_img: data?.url_img,
      songs: data?.songs,
    };

    const album = await AlbumsModel.updateOne(
      { _id: req.params.id_album },
      { $set: body }
    );

    return res.status(200).json(album);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteAlbum = async (req, res, next) => {
  try {
    await AlbumsModel.deleteOne({ _id: req.params.id_albums });

    return res.status(200).json("ok");
  } catch (error) {
    return res.status(500).json(error);
  }
};
