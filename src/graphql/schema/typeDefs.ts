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

  type Address {
    administrative: String!
    city: String!
    country: String!
    countryCode: String!
    county: String!
    lat: Float!
    lng: Float!
    postcode: String!
    postcodes: [String]!
    value: String!
  }
  input AddressInput {
    administrative: String!
    city: String!
    country: String!
    countryCode: String!
    county: String!
    lat: Float!
    lng: Float!
    postcode: String!
    postcodes: [String]!
    value: String!
  }

  type Organisation {
    name: String!
    siret: String!
    siege: Address!
  }
  type ShopMeta {
    validated: Boolean
  }
  type Shop {
    _id: String!
    name: String!
    address: Address!
    organisation: Organisation!
    labels: [String]!
    products: [Product]!
    commands: [Command]!
    owner(_: String): Account!
    meta: ShopMeta!
  }
  input ShopInput {
    name: String!
    address: AddressInput
    organisationName: String!
    organisationSiret: String!
    organisationSiege: AddressInput!
    labels: [String]!
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
    price: Float!
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
    price: Float!
    paymentType: String!
    meta: CommandMeta!
  }

  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    plainPassword: String!
  }

  input AddUserInfoInput {
    firstName: String!
    lastName: String
  }

  type Account {
    firstName: String!
    lastName: String
  }

  type Query {
    getAllShops: [ID]!
    getShop(id: ID!): Shop

    viewer: Account
  }

  type Mutation {
    addShop(input: ShopInput!): Void
    addProduct(market: ID!, input: ShopInput!): Void

    signUp(input: SignUpInput!): Boolean!
    addUserInfo(input: AddUserInfoInput!): Boolean!
  }
`;
