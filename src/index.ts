import 'module-alias/register';

import { ApolloServer } from 'apollo-server-express';
import Promise from 'bluebird';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { apolloConfig } from '@src/graphql/schema';
import * as config from './config';
import admin from 'firebase-admin';
import serviceAccount from './config/firebase-credential.json'

Promise.promisifyAll(mongoose);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

mongoose.connect(config.db, {
  bufferMaxEntries: 0,
  keepAlive: true,
  socketTimeoutMS: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

const app = express();
const apollo = new ApolloServer(apolloConfig);

app.use(
  cors({
    origin: config.allowedOrigins,
    credentials: true,
  })
);

app.use(cookieParser());

apollo.applyMiddleware({ app, cors: false });

const httpServer = http.createServer(app);
apollo.installSubscriptionHandlers(httpServer);

httpServer.listen(process.env.PORT || config.port, () => {
  console.log(`🚀 Server ready at ${config.port}`);
  console.log(`🚀 Server ready at ${config.hostname}${apollo.graphqlPath}`);
  console.log(
    `🚀 Subscriptions ready at ws://${config.hostname}${apollo.subscriptionsPath}`
  );
  console.log(`🚀 Running environment: ${process.env.NODE_ENV}`);
});
