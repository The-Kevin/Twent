import mongoose, { Schema, Document } from "mongoose";

interface Albums extends Document {
  name: string;
  data: string;
  url_img: string;
  songs: string[];
}

const AlbumsSchema: Schema<Albums> = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  url_img: { type: String },
  songs: [{ type: String }],
});

export default mongoose.model("Albums", AlbumsSchema);
