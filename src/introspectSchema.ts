import { NestFactory } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { AuthResolver } from './auth/auth.resolver';
import { UsersResolver } from './users/users.resolver';
import { printSchema } from 'graphql';

async function introspectSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([UsersResolver, AuthResolver]);
  console.log(printSchema(schema));
}
(async () => {
  await introspectSchema();
})();
