import { ApolloServer } from 'apollo-server-lambda'
import * as path from 'path'
import 'reflect-metadata'
import { buildSchemaSync } from 'type-graphql'
import { environment } from '../environment'
import { PingResolver } from './resolvers/ping'
import { RepoResolver } from './resolvers/repo'

export const apolloServer = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [PingResolver, RepoResolver],
    validate: false,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  }),
  playground: environment.enableIntrospection,
  introspection: environment.enableIntrospection,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
})
