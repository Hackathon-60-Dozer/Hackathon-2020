import {Resolver, Example, Shop} from '@src/types';
import admin from 'firebase-admin';

export const getShop: Resolver<Shop, { id: string }> = async (
  _,
  { id }
) => {
  console.log(id);

  admin.auth().listUsers(5).then(console.log);

  return {

  };
};
