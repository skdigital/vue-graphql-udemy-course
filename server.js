const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// importing type defs and resolvers from respective files
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

// importing Enviroment veriables and Mongoose models
require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");

// connect to MLab Database - cloud hosted online
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("-- DB connected --"))
  .catch(err => console.error(err));

// handle depreciation error
mongoose.set("useCreateIndex", true);

// Create Apollo/GraphQL Server using typeDef, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

// server listening on port 4000
server.listen(4000).then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
