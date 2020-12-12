import { ApolloError } from 'apollo-server-express';
import { Resolver, ExampleInput } from '@src/types';
import Joi from 'joi';
import ExampleModel from '@src/models/Example';

const schema = Joi.object({
  name: Joi.string(),
});

export const addExample: Resolver<boolean, { input: ExampleInput }> = async (
  _,
  { input }
) => {
  console.log(input);

  const { value, error } = schema.validate(input);

  if (error) {
    throw new ApolloError(error.message, 'BadRequest');
  }

  const example = new ExampleModel(value);
  await example.save((err) => {
    if (err) throw err;
  });

  return true;
};
