const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = "@apollo/server/standalone";
const typeDefs = require("./schema");

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs });
  const { url } = await startStandaloneServer(server);
  console.log(`Server is Running!
    query at ${url}
    `);
}

startApolloServer();
