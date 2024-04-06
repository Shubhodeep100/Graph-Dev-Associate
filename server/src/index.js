const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = "@apollo/server/standalone";
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./schema");

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
        schema: makeExecutableSchema({ typeDefs }),
        mocks: {},
    })
  });

  const { url } = await startStandaloneServer(server);
  console.log(`Server is Running!
    query at ${url}
    `);
}

startApolloServer();
