import { Schema } from 'mongoose';

const AddressSchema = new Schema({
  administrative: String,
  city: String,
  country: String,
  countryCode: String,
  county: String,
  lat: Number,
  lng: Number,
  postcode: String,
  postcodes: [String],
  value: String,
});

export default AddressSchema;
