import mongoose, { Schema, Document } from "mongoose";

interface Member extends Document {
  name: string;
  years: string;
  country: string;
  instrumets: string;
  spouse: string;
}

const MemberSchema: Schema<Member> = new Schema({
  name: { type: String, required: true },
  country: { type: String },
  years: { type: String, required: true },
  instruments: [{ type: String }],
  spouse: { type: String },
});

export default mongoose.model("Member", MemberSchema);
