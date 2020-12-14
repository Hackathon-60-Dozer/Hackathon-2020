import mongoose, { Schema } from 'mongoose';
import { Model, User } from '@src/types';

const ShopSchema = new Schema(
  {
    _id: String,
    uid: String,
    firstName: String,
    lastName: String,
    shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
  },
  { _id: false }
);

export default mongoose.model('User', ShopSchema) as Model<User>;
