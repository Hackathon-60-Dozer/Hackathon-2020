import { ApolloError } from 'apollo-server-express';
import { Resolver } from '@src/types';
import Joi from 'joi';
import { AddUserInfoInput } from '@src/types/inputs';
import User from '@src/models/User';

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string(),
});

export const editUser: Resolver<
  boolean,
  { input: AddUserInfoInput; uid?: string }
> = async (_, { input, uid }, ctx) => {
  const { value, error } = schema.validate(input);

  if (error) {
    throw new ApolloError(error.message, 'BadRequest');
  }

  // admin.auth().setCustomUserClaims(uid || ctx.session.uid, value);

  await User.findByIdAndUpdate(uid || ctx.session.uid, value);

  return;
};
