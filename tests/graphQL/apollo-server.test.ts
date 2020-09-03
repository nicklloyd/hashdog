import { ApolloServer } from 'apollo-server-lambda'
import { apolloServer } from '../../src/graphQL/apollo-server'

describe('graphQL/apollo-server', () => {
  test('apolloServer is function', () => {
    expect(apolloServer).toBeDefined()
    expect(apolloServer).toBeInstanceOf(ApolloServer)
  })
})
