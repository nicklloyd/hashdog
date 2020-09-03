import { apolloServer } from './graphQL/apollo-server'

export const graphqlHandler = apolloServer.createHandler({
  cors: {
    origin: true,
    credentials: true
  }
})
