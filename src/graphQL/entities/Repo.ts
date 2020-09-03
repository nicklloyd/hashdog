import { Field, ObjectType } from 'type-graphql'

@ObjectType({ description: 'Object representing a github repo' })
export class Repo {
  @Field()
  name: string

  @Field({ nullable: true, description: 'The repo description' })
  description?: string

  @Field()
  url: string
}
