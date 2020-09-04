import gql from 'graphql-tag'
import testServer from '../../utils/testServer'

describe('RepoResolver', () => {
  const { query } = testServer(() => ({}))

  it('returns the urls passed in as an arg', async () => {
    const REPO = gql`
      query Repo {
        repo(url: "http://example.com") {
          url
        }
      }
    `
    const res = await query({ query: REPO })

    expect(res.errors).toBe(undefined)
    expect(res?.data?.repo).toMatchObject({ url: 'http://example.com' })
  })

  it('throws error when missing arg', async () => {
    const REPO = gql`
      query Repo {
        repo {
          url
        }
      }
    `
    const res = await query({ query: REPO })
    expect(res.errors).toBeDefined()
  })
})
