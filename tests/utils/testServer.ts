import { ApolloServer } from 'apollo-server'
import { ApolloServerTestClient, createTestClient } from 'apollo-server-testing'
import 'dotenv-safe/config'
import 'reflect-metadata'
import { buildSchemaSync } from 'type-graphql'
import { PingResolver } from '../../src/graphQL/resolvers/ping'
import { RepoResolver } from '../../src/graphQl/resolvers/repo'

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function testServer(dataSources: any): ApolloServerTestClient {
  return createTestClient(
    new ApolloServer({
      schema: buildSchemaSync({
        resolvers: [PingResolver, RepoResolver],
        validate: false
      }),
      dataSources
    })
  )
}
