const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    contacts(name: String): [Contact]
  }

  type Contact {
    name: String!
    phone: String!
  }
`;

module.exports = typeDefs;
