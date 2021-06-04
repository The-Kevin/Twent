import mongoose, { Schema, Document } from "mongoose";

interface Band extends Document {
  name: string;
  members: string;
  past_members: string;
  years_active: string;
}

const BandSchema: Schema<Band> = new Schema({
  name: { type: String, required: true },
  id_members: [{ type: Schema.Types.ObjectId, ref: "Member", required: true }],
  past_members: [{ type: String, required: true }],
  years_active: { type: String, required: true },
  genres: [{ type: String }],
  origin: { type: String, required: true },
  songs: [{ type: String }],
  id_albums: [{ type: Schema.Types.ObjectId, ref: "Albums" }],
});

export default mongoose.model<Band>("Band", BandSchema);
