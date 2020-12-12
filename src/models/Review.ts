import mongoose, { Schema } from 'mongoose';
// @ts-ignore
import mongooseAlgolia from 'mongoose-algolia';
import { Example, Model } from '@src/types';

const ExampleSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true
  },
  firstname: String,
  lastname: String,
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Example', ExampleSchema) as Model<Example>;
