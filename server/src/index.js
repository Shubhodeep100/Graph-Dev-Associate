const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Quer to get all tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }
  "A track is a group of Modules that teacches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
