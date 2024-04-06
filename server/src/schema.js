const gql = require("graphql-tag");

const typeDefs = gql`
"Query fileds are the entry points for the rest of our schema"

  type Query {
    tracksForHome: [Track!]!
  }

  type Query {
    "Get spaceCats array for homepage grid"
    SpaceCat: [SpaceCat]
  }
  
  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    missions: [Mission]
  }

  type Mission {
    id: ID!
    name: String!
    description: String!
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
