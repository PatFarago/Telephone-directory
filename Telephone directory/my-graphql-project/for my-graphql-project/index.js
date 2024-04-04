const { ApolloServer } = require('apollo-server');

// Define the schema, database from json.file and resolver with necessities
const typeDefs = require('./schema');
const contactsData = require('./data.json'); 
const resolvers = {
  Query: {
    contacts: (_, { name }) => {
      if (name) {
        return contactsData.filter(contact =>
          contact.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      return contactsData;
    },
  },
};

// Create and starting the ApolloServer instance
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
