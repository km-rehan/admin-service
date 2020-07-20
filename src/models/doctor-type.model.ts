import { Document, Schema } from "mongoose";


export class DoctorType extends Document {
  specialty: string;
  description: string;
  services: string[];
  keywords: string[];
}

export const DoctorTypeSchema = new Schema({
  specialty: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  services: {
    'type': {
      type: String,
    },
    'value': [String]
  },
  keywords: {
    'type': {
      type: String,
    },
    'value': [String]
  }
}, {
  timestamps: true
})