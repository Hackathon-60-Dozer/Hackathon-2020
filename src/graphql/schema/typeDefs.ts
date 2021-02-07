import gql from 'graphql-tag';

export const typeDefs = gql`
  "Authorization"
  directive @auth(
    admin: Boolean
  ) on OBJECT | FIELD_DEFINITION | ARGUMENT_DEFINITION | INPUT_FIELD_DEFINITION

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
    hours: JSONObject!
    labels: [String]!
    products: [Product]!
    commands: [Command]! @auth
    owner(_: String): Account! @auth(admin: true)
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

  input EditUserInput {
    firstName: String!
    lastName: String
  }

  type Account {
    firstName: String!
    lastName: String
    email: EmailAddress @auth(admin: true)
  }

  type Query {
    getAllShops: [ID]!
    getShop(id: ID!): Shop

    getAllShopRequests: [ID]! @auth(admin: true)
    getShopRequest(shop: ID!): Shop! @auth(admin: true)

    viewer: Account
  }

  type Mutation {
    """
    Create a new shop request if the current user does not already own a shop.
    Admins will first need to validate the shop before being publicated.
    """
    addShop(input: ShopInput!): Void @auth
    """
    Edit the current shop data.
    Admin can edit any shop they want.

    *The current user need to own a shop.*
    """
    editShop(input: ShopInput!, shop: ID @auth(admin: true)): Void @auth
    """
    Remove the current shop.
    Admin can edit any shop they want.

    If no token given, an email will be sent to the shop owner with the token.

    *The current user need to own a shop.*
    """
    removeShop(token: String, shop: ID @auth(admin: true)): Void @auth

    "Add a product to the current shop."
    addProduct(shop: ID!, input: ShopInput!): Void @auth
    """
    "Edit a product from the current shop.
    Admin can edit any product they want.

    *The current user need to own a shop.*
    """
    editProduct(
      product: ID!
      input: ShopInput!
      shop: ID @auth(admin: true)
    ): Void @auth
    """
    Remove a product from the current shop.
    Admin can remove any product they want.

    *The current user need to own a shop.*
    """
    removeProduct(product: ID!, shop: ID @auth(admin: true)): Void @auth

    signUp(input: SignUpInput!): Boolean!
    editUser(input: EditUserInput!, uid: ID @auth(admin: true)): Void! @auth

    processShopRequest(shop: ID!, validate: Boolean!): Void @auth(admin: true)
  }
`;
