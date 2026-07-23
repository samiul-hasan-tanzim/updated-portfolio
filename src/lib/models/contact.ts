import mongoose, { Schema, type Model, type Document } from "mongoose";

export interface IContact extends Document {
  callsign: string;
  frequency: string;
  subject: string;
  message: string;
  createdAt: Date;
}

const collectionName = process.env.COLLECTION_NAME || "messages";

const ContactSchema = new Schema<IContact>(
  {
    callsign: { type: String, required: true, trim: true },
    frequency: { type: String, required: true, trim: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true, collection: collectionName }
);

export const Contact: Model<IContact> =
  mongoose.models.Contact ?? mongoose.model<IContact>("Contact", ContactSchema);
