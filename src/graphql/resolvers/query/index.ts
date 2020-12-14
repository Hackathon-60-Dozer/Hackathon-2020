import { Resolver, User as UserType } from '@src/types';
import { AuthenticationError } from 'apollo-server-express';
import User from '@src/models/User';

export * from './shop';

export const viewer: Resolver<UserType> = async (_, args, ctx) => {
  if (!ctx.session) {
    throw new AuthenticationError('Vous devez être connecté.');
  }

  let user;

  try {
    user = await User.findById(ctx.session.uid);
  } catch (e) {
    console.log(e);
    throw e;
  }

  return user;
};
