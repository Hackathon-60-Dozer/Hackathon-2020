import { ApolloError } from 'apollo-server-express';
import { Resolver } from '@src/types';
import Joi from 'joi';
import admin from 'firebase-admin';
import { AddUserInfoInput, SignUpInput } from '@src/types/inputs';
import User from '@src/models/User';

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required().email(),
  plainPassword: Joi.string().required().min(6),
});

export const signUp: Resolver<boolean, { input: SignUpInput }> = async (
  _,
  { input }
) => {
  const {
    value: { email, plainPassword, ...value },
    error,
  } = schema.validate(input);

  if (error) {
    throw new ApolloError(error.message, 'BadRequest');
  }

  let firebaseUser: admin.auth.UserRecord;

  try {
    firebaseUser = await admin.auth().createUser({
      email,
      emailVerified: false,
      password: plainPassword,
      displayName: `${value.firstName} ${value.lastName}`,
    });
  } catch (e) {
    throw new ApolloError(e.message, e.code);
  }

  const user = new User({
    ...value,
    uid: firebaseUser.uid,
  });
  user._id = firebaseUser.uid;
  await user.save((err) => {
    if (err) throw err;
  });

  return true;
};

const addInfoSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string(),
});

export const addUserInfo: Resolver<
  boolean,
  { input: AddUserInfoInput }
> = async (_, { input }, ctx) => {
  const { value, error } = addInfoSchema.validate(input);

  console.log(ctx.session);

  if (error) {
    throw new ApolloError(error.message, 'BadRequest');
  }

  const user = new User({
    ...value,
    uid: ctx.session.uid,
  });
  user._id = ctx.session.uid;
  await user.save((err) => {
    if (err) throw err;
  });

  return true;
};
