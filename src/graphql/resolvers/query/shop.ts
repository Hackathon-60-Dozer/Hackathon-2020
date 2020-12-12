import {
  Resolver,
  Shop as ShopType,
  Market,
  Product,
  Command,
} from '@src/types';
import Shop from '@src/models/Shop';
import { ApolloError } from 'apollo-server-express';

type ShopData = {
  market: MarketResolver<Record<string, unknown>>;
  products: ProductResolver<Record<string, unknown>>;
  commands: CommandResolver<Record<string, unknown>>;
} & ShopType;
type ShopResolver<T = { id: string }> = Resolver<ShopData, T>;

export const getShop: ShopResolver = async (_, { id }) => {
  let data: ShopData;

  try {
    await Shop.findById(id);
  } catch (e) {
    throw new ApolloError('This shop does not exist');
  }

  return data;
};

type MarketResolver<T = { id: string }> = Resolver<Market, T>;
type ProductResolver<T = { id: string }> = Resolver<Product, T>;
type CommandResolver<T = { id: string }> = Resolver<Command, T>;
