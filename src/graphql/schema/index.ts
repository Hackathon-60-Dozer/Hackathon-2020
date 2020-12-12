import {
  ApolloServerExpressConfig,
  AuthenticationError,
} from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers';
import * as schemaDirectives from '../directives';
import { typeDefs } from './typeDefs';
import admin from 'firebase-admin';

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers,
  schemaDirectives,
});

export const apolloConfig: ApolloServerExpressConfig = {
  schema,
  context: async (ctx) => {
    const { req } = ctx;

    if (req) {
      const authorization = req.headers.authorization || '';
      const [scheme, token] = authorization.split(' ') || [];

      if (token) {
        let session;

        switch (scheme) {
          case 'Bearer':
            try {
              session = await admin.auth().verifyIdToken(token);
            } catch (e) {
              throw new AuthenticationError(e);
            }
            break;

          default:
            ctx.res.statusCode = 403;
            throw new AuthenticationError('Unsupported authorization scheme');
        }

        return {
          ...ctx,
          session,
        };
      } else {
        return { ...ctx };
      }
    }
    return { ...ctx };
  },
  debug: process.env.NODE_ENV === 'development',
  playground: true,
  // playground: process.env.NODE_ENV === 'development'
};
