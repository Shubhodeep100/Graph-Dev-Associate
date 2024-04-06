const gql = require("graphql-tag");

const typeDefs = gql`
"Query fileds are the entry points the rest of our schema"
"Query to get tracks array of the homepage grid"

  type Query {
    tracksForHome: [Track!]!
  }


  "A track is group of modules that teaches about a specific topic"
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
