import { Resolver } from '@src/types';
import Shop from '@src/models/Shop';
import { ApolloError } from 'apollo-server-express';
import { shopResolver } from '@src/helpers/resolvers';

export const getShop: Resolver = async (_, args, ctx) => {
  return await shopResolver(args.id)(_, args, ctx);
};

export const getAllShops: Resolver<string[]> = async () => {
  let data;

  try {
    data = await Shop.find().distinct('_id');
  } catch (e) {
    throw new ApolloError('This shop does not exist');
  }

  return data;
};
