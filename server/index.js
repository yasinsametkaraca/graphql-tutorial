const { ApolloServer, gql } = require('apollo-server');

const typeDefs = `#graphql
    type Query {
        books: String
    }
`;

const resolvers = {
    Query: {
        books: () => "books",
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(5000, () => {
    console.log(`🚀 Server is running on port: 5000`);
});