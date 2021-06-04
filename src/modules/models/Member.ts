import mongoose, { Schema, Document } from "mongoose";

interface Member extends Document {
  name: string;
  years: string;
  instrumets: string;
  spouse: string;
}

const MemberSchema: Schema<Member> = new Schema({
  name: { type: String, required: true },
  years: { type: String, required: true },
  instruments: [{ type: String }],
  spouse: { type: String },
});

export default mongoose.model("Member", MemberSchema);
