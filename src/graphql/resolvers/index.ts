import * as scalars from './scalars';

import * as Mutation from './mutation';
import * as Query from './query';

export const resolvers: any = {
  ...scalars,

  Query,
  Mutation,
  // Subscription: {
  //   ...userSubscriptions,
  // },
};
