import { NestFactory } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { AuthResolver } from './auth/auth.resolver';
import { UsersResolver } from './users/users.resolver';
import * as fs from 'fs/promises';
import { printSchema } from 'graphql';

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([UsersResolver, AuthResolver]);
  await fs.writeFile('src/schema.gql', printSchema(schema));
}
(async () => {
  await generateSchema();
})();
