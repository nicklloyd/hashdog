import { Arg, Query, Resolver } from 'type-graphql'
import { Repo } from '../entities/Repo'

@Resolver(Repo)
export class RepoResolver {
  @Query(() => Repo)
  repo(@Arg('url', () => String) url: string): Repo {
    return {
      name: 'foo',
      description: 'this is bar',
      url: url
    }
  }
}
