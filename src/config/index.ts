import { config } from 'dotenv';

config();
export const db = process.env.DB || '';
export const port = process.env.PORT;
export const allowedOrigins = [
  'https://api.octanium.fr',
  'https://garden.octanium.fr',

  'http://localhost:3000',
  'http://localhost:4020',

  'http://192.168.1.65:3000',
  'http://192.168.1.65:4020',
];
export const hostname = process.env.HOSTNAME;

export const algoliaAppId = process.env.ALGOLIA_APP_ID;
export const algoliaApiKey = process.env.ALGOLIA_API_KEY;
