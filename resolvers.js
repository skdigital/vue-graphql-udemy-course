module.exports = {
  Query: {
    getUser: () => null
  },
  Mutation: {
    signupUser: async (_, { username, email, password }, { User }) => {
      // takes the username as a param and checks if the user exists
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      // saves user to database
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return newUser;
    }
  }
};
