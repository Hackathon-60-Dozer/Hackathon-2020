import mongoose, { Schema } from 'mongoose';
import { Address, Model } from '@src/types';

const AddressSchema = new Schema({
  country: String, // ISO Code
  name: String, // Full line name
  firstname: String,
  lastname: String,
  organisationName: String,
  administrativeArea: String, // State / Province / Region
  locality: String, // City / Town
  postalCode: String, // Postal Code / ZIP Code
  premise: String, // Apartment / Suite / Box number, etc,
});

export default mongoose.model('Address', AddressSchema) as Model<Address>;
