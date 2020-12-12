import mongoose, { Schema } from 'mongoose';
import { Market, Model } from '@src/types';
import Address from '@src/models/Address';

const MarketSchema = new Schema({
  name: String,
  address: Address,
  shop: [{ type: Schema.Types.ObjectId, ref: 'Shop' }],
  meta: {
    validated: Boolean,
  },
  owner: String, // owner uid
});

export default mongoose.model('Market', MarketSchema) as Model<Market>;
