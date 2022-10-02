import path from 'node:path';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { AppoitmentsResolver } from './resolvers/appoitments.resolver';

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            AppoitmentsResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    });
    const server = new ApolloServer({ schema });
    const { url } = await server.listen()

    console.log(`Listen on: ${url}`);
}

bootstrap();