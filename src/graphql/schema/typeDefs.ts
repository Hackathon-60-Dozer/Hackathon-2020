import gql from 'graphql-tag';

export const typeDefs = gql`
  #    Scalars
  scalar Date
  scalar Time
  scalar DateTime
  scalar Timestamp
  scalar EmailAddress
  scalar URL
  scalar HexColorCode
  scalar HSL
  scalar HSLA
  scalar RGB
  scalar RGBA
  scalar JSON
  scalar JSONObject
  scalar ObjectID
  scalar Void

  type Example {
    id: ID!
    name: String!
  }

  input ExampleInput {
    name: String
  }


  type Address {
    country: String! # ISO Code
    name: String! # Full line name
    firstname: String!
    lastname: String!
    organisationName: String!
    administrativeArea: String! # State / Province / Region
    locality: String! # City / Town
    postalCode: String! # Postal Code / ZIP Code
    premise: String! # Apartment / Suite / Box number, etc,
  }


  type MarketMeta {
    validated: Boolean
  }
  type Market {
    name: String!
    address: Address!
    shops(_: String): [Shop]!
    meta: MarketMeta!
    owner: String!
  }

  type Organisation {
    name: String!
    siret: String!
    siege: Address!
  }
  type ShopMeta {
    useMarketCollectPoint: Boolean
    marketValidated: Boolean
    validated: Boolean
  }
  type Shop {
    name: String!
    organisation: Organisation!
    owner: String!
    labels: [String]!
    market(_: String): Market!
    products(_: String): [Product]!
    commands(_: String): [Command]!
    meta: ShopMeta!
  }

  type ProductDetails {
    mode: [String]
    allergens: [String]
    alcohol: Boolean
  }
  type ProductMeta {
    available: Boolean
  }
  type Product {
    name: String!
    price: Int!
    unit: String!
    details: ProductDetails!
    meta: ProductMeta!
  }

  type CommandMeta {
    validated: Boolean
    collected: Boolean
    paid: Boolean
  }
  type Command {
    user: String!
    product(_: String): [Product]!
    collectDate: Date!
    price: Int!
    paymentType: String!
    meta: CommandMeta!
  }

  type Query {
    getMarket(id: ID!): Market
    getShop(id: ID!): Shop
  }

  type Mutation {
    addExample(input: ExampleInput!): Boolean!
    editExample(id: ID!, input: ExampleInput!): Boolean!
    removeExample(id: ID!): Boolean!
  }
`;
