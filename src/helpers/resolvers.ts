import { Resolver, User as UserType, Shop as ShopType } from '@src/types';
import { ApolloError } from 'apollo-server-express';
import User from '@src/models/User';
import Shop from '@src/models/Shop';
import faker from 'faker';

export const userResolver = (id: string): Resolver<UserType> => async () => {
  let user;

  try {
    user = await User.findById(id).lean();
  } catch (e) {
    throw new ApolloError('This user does not exist');
  }

  return user;
};

export const shopResolver = (id: string): Resolver<ShopType> => async () => {
  let shop;

  try {
    shop = await Shop.findById(id).lean();
  } catch (e) {
    throw new ApolloError('This user does not exist');
  }

  return {
    ...shop,
    owner: userResolver(shop.owner),
    products: Array.from(Array(5).keys()).map(() => {
      console.log(faker.name.title());

      return {
        name: faker.name.title(),
        price: faker.commerce.price(),
        unit: ['kilo', 'liter', 'piece', 'lot'][Math.floor(Math.random() * 3)],
        details: {
          mode: [],
          allergens: [],
          alcohol: true,
        },
        meta: {
          available: Math.random() > 0.3,
        },
      };
    }),
  };
};
