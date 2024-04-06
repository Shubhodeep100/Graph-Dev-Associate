const gql = require("graphql-tag");

const typeDefs = gql`
  "A track is group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
`;

module.exports = typeDefs;
