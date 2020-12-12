import mongoose, { Schema } from 'mongoose';
// @ts-ignore
import mongooseAlgolia from 'mongoose-algolia';
import { Example, Model, MongooseAlgoliaSettings } from '@src/types';
import { algoliaApiKey, algoliaAppId } from '@src/config';

const ExampleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

ExampleSchema.plugin(mongooseAlgolia, {
  appId: algoliaAppId,
  apiKey: algoliaApiKey,
  indexName: 'yourSchema', //The name of the index in Algolia, you can also pass in a function
  selector: '-name', //You can decide which field that are getting synced to Algolia (same as selector in mongoose)
  populate: {
    path: 'comments',
    select: 'name',
  },
  defaults: {
    author: 'unknown',
  },
  mappings: {
    title: function (value) {
      return `Book: ${value}`;
    },
  },
  virtuals: {
    whatever: function (doc) {
      return `Custom data ${doc.name}`;
    },
  },
  filter: function (doc) {
    return !doc.softdelete;
  },
  debug: true, // Default: false -> If true operations are logged out in your console
} as MongooseAlgoliaSettings);

const ExampleModel = mongoose.model('Example', ExampleSchema) as Model<Example>;
ExampleModel.SyncToAlgolia();
ExampleModel.SetAlgoliaSettings({
  searchableAttributes: ['name', 'properties', 'shows'], //Sets the settings for this schema, see [Algolia's Index settings parameters](https://www.algolia.com/doc/api-client/javascript/settings#set-settings) for more info.
});

export default ExampleModel;
