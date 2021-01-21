import { config } from 'dotenv';

config();
export const db = process.env.DB || '';
export const port = process.env.PORT;
export const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:4020',
];
export const hostname = process.env.HOSTNAME;

export const algoliaAppId = process.env.ALGOLIA_APP_ID;
export const algoliaApiKey = process.env.ALGOLIA_API_KEY;
