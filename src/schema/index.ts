import mongoose from "mongoose";
import type { ICity } from "../types";
const { Schema, model } = mongoose;

const citySchema = new Schema({
  name: { type: String, required: true },
  neighbors: {
    type: [
      {
        name: String,
        distance: Number,
      },
    ],
    required: true,
  },
});

export const City = model<ICity>("City", citySchema);
