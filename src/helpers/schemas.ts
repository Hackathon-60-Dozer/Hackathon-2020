import Joi from 'joi';

export const addressValidationSchema = Joi.object({
  administrative: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  countryCode: Joi.string().required(),
  county: Joi.string().required(),
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  postcode: Joi.string().required(),
  postcodes: Joi.array(),
  value: Joi.string().required(),
});
