import { ApolloServer, gql } from 'apollo-server';

interface User {
    id: number;
    name: string;
}

const users: User[] = [];

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
    }

    type Query {
        users: [User!]!
    }

    type Mutation {
        createUser(name: String!): String!
    }
`;

const resolvers = {
    Query: {
        users: () => users
    },

    Mutation: {
        createUser: (_: any, args: any) => {
            const id = users.length + 1;
            const { name } = args;
            users.push({ id, name });
            return name;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => console.log(`Listen on: ${url}`));