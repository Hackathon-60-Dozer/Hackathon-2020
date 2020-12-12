import mongoose, { Schema } from 'mongoose';
import {Model, Product} from '@src/types';

const ProductSchema = new Schema({
  name: String,
  price: Number,
  unit: String, // kilo / litre / pièce / lot
  details: {
    mode: [String], // consumptions modes
    allergens: [String],
    alcohol: Boolean,
  },
  meta: {
    available: Boolean,
  }
});

export default mongoose.model('Product', ProductSchema) as Model<Product>;
