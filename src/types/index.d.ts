import mongoose, { Document, SchemaTimestampsConfig } from 'mongoose';

export interface MongooseAlgoliaSettings {
  appId: string;
  apiKey: string;
  indexName: string;
  selector: string;
  populate: mongoose.ModelPopulateOptions;
  /** You can set default values for fields that are blank in mongoose. This is very useful in cases where you have documents with optional fields. Since it isn't possible to query null values in algolia, setting those fields to 'unknown' or 'notset' makes them searchable/filterable.<br/>
  <br/>
   You can nest properties */
  defaults: any;
  mappings: any;
  virtuals: any;
  filter: any;
  debug: boolean;
}

export type Model<T> = mongoose.Model<
  T &
    Document &
    SchemaTimestampsConfig & {
      /** Call this method if you want to sync your document to Algolia */
      SyncToAlgolia(): void;
      /** Call this method if you want to remove your document from the Algolia index */
      RemoveFromAlgolia(): void;
    },
  Record<string, unknown>
> & {
  /** Call this method if you want to sync all your documents with algolia (for single doc sync see doc.SyncToAlgolia)<br/>
   <br/>
   This method clears the Algolia index for this schema and synchronizes all documents to Algolia (based on the settings defined in your plugin settings)<br/> */
  SyncToAlgolia(): void;
  /** Sets the settings for this schema, see [Algolia's Index settings parameters](https://www.algolia.com/doc/api-client/javascript/settings#set-settings) for more info about available parameters. */
  SetAlgoliaSettings(settings: { searchableAttributes?: string[] }): void;
};

export type Resolver<R = any, T = any> = (
  parent: any,
  args: T,
  ctx: any
) => Promise<R>;

export interface Example {
  id: string;
  name: string;
}

export interface ExampleInput {
  name?: string;
}

export interface ExampleSearch {
  filter?: string;
  sort?: string;
  text?: string;
}

export interface Address {
  country: string; // ISO Code
  name: string; // Full line name
  firstname: string;
  lastname: string;
  organisationName: string;
  administrativeArea: string; // State / Province / Region
  locality: string; // City / Town
  postalCode: string; // Postal Code / ZIP Code
  premise: string; // Apartment / Suite / Box number, etc,
}

export type UserId = String /** Reference to user */
export type Ref<T> = String /** Database beference */

export interface Market {
  name: string;
  address: Address,
  shop: Ref<Shop>[];
  meta: {
    validated: boolean;
  }
  owner: UserId;
}

export type Label = String /** Food typr label */
export interface Shop {
  name: string;
  organisation: {
    name: string
    siret: name;
    siege: Address
  };
  owner: {
    uid: UserId;
    firstName: string;
    lastName: string;
  },
  labels: Label[];
  market?: Ref<Market>;
  products: Product[];
  commands: Command[];
  meta: {
    useMarketCollectPoint: boolean;
    marketValidated: boolean;
    validated: boolean;
  }
}

export type Unit = 'kilo' | 'liter' | 'piece' | 'lot';
export type ConsumptionMode = string;
export type Allergens = string;
export interface Product {
  name: string;
  price: Number,
  unit: Unit;
  details: {
    mode: ConsumptionMode[];
    allergens: Allergens[];
    alcohol: boolean;
  };
  meta: {
    available: boolean;
  }
}

export type PaymentType = 'online' | 'onsite';
export interface Command {
  user: UserId;
  product: Ref<Product>[];
  collectDate: Date;
  price: Number;
  paymentType: PaymentType;
  meta: {
    validated: boolean;
    collected: boolean;
    paid: boolean;
  };
}
