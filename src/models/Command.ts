import mongoose, { Schema } from 'mongoose';
import { Command, Model } from '@src/types';
import Product from '@src/models/Product';

const CommandSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [Product.schema],
  collectDate: Date,
  price: Number, // HT
  paymentType: String, // en ligne ou sur place
  meta: {
    validated: Boolean,
    collected: Boolean,
    paid: Boolean,
  },
});

export default mongoose.model('Command', CommandSchema) as Model<Command>;
