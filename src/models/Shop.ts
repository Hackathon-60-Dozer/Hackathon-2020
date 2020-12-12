import mongoose, { Schema } from 'mongoose';
import {Model, Shop} from '@src/types';
import Product from "@src/models/Product";
import Command from "@src/models/Command";
import Address from "@src/models/Address";

const ShopSchema = new Schema({
  name: String,
  organisation: {
    name: String,
    siret: String,
    siege: Address,
  },
  owner: {
    uid: String,
    firstName: String,
    lastName: String,
  },
  label: [String],
  market: { type: Schema.Types.ObjectId, ref: 'Market' },
  products: [Product],
  commands: [Command],
  meta: {
    useMarketCollectPoint: Boolean,
    marketValidated: Boolean,
    validated: Boolean
  },
});

export default mongoose.model('Shop', ShopSchema) as Model<Shop>;
