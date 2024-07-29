import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule as GraphQL } from '@nestjs/graphql'
import { join } from 'path'
import { Module } from '@nestjs/common'

@Module({
  imports: [
    GraphQL.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schemas.gql'),
      sortSchema: true,
      playground: true,
      introspection: true,
      context: ({ req }) => ({ req })
    })
  ],
  providers: [],
  exports: [GraphQL]
})
export class GraphqlModule {}
