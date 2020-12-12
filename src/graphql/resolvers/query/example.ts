import { Resolver, Example } from '@src/types';
import admin from 'firebase-admin';

export const getExample: Resolver<Example, { id: string }> = async (
  _,
  { id }
) => {
  console.log(id);

  admin.auth().listUsers(5).then(console.log);

  return {
    id: 'jf4g',
    name: 'example1',
  };
};
