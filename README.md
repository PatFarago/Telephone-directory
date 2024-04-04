## Part 1. Requierements and Installation:

## Ensure that you have Node.js installed on your machine. Open the folder "Telephone directory" in your IDE. Then, create a new directory for your project and initialize it through SSH:

cd my-graphql-project
npm init -y

## Install all dependencies through SSH:

npm install apollo-server graphql

## Initialize the React

npx create-react-app client

# Replace any existing files if necessary: Now drag and drop the files from the folder "./my-graphql-project/for my-graphql-project " into the folder "./my-graphql-project/" and also

## all the files from the folder "./my-graphql-project/for client " into the folder "./my-graphql-project/client"

# Install packeges:

cd my-graphql-project
npm install @material-ui/core @apollo/client graphql
npm install @apollo/client @material-ui/core

cd client
npm install @mui/material @emotion/react @emotion/styled
npm install --legacy-peer-deps

## Part 2. Initialization

## Open the project-folder "My-GRAPHQL-PROJECT in your IDE.

## Then start the apollo server GraphQL preferable on FireFox or Chrome, by SSH:

cd my-graphql-project
node index.js

## Errors might occure on Safari.

## Inside ApolloGraphQL, If this query is not default, copy+paste+run this query:

query {
contacts {
name
phone
}
}

## Go back to the terminal and start the Webapp through SSH:

cd client
npm start

## Webapp "Gelbe Seiten" shall open and be functional. Enjoy!
