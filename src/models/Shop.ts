import mongoose, { Schema } from 'mongoose';
import { Model, Shop } from '@src/types';
import Product from '@src/models/Product';
import Command from '@src/models/Command';
import AddressSchema from '@src/models/Address';

const ShopSchema = new Schema({
  name: String,
  address: AddressSchema,
  organisation: {
    name: String,
    siret: String,
    siege: AddressSchema,
  },
  owner: { type: String, ref: 'User' },
  products: [Product.schema],
  commands: [Command.schema],
  labels: [{ type: String }],
  meta: {
    validated: Boolean,
  },
});

export default mongoose.model('Shop', ShopSchema) as Model<Shop>;
