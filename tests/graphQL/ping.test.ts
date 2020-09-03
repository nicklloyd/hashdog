import gql from 'graphql-tag'
import testServer from '../utils/testServer'

describe('PingResolver', () => {
  it('answers with Pong!', async () => {
    const { query } = testServer(() => ({}))

    const PING = gql`
      query Ping {
        ping
      }
    `
    // A query is made as if it was a real service.
    const res = await query({ query: PING })

    // We ensure that the errors are undefined.
    // This helps us to see what goes wrong.
    expect(res.errors).toBe(undefined)
    expect(res?.data?.ping).toEqual('PONG')
  })
})
