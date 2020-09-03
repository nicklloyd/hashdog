import { Query, Resolver } from 'type-graphql'
import { environment } from '../../environment'

@Resolver()
export class PingResolver {
  @Query(() => String)
  ping(): string {
    return environment.secretMessage
  }
}
