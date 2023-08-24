import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID
    username: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Query {
    allTweets: [Tweet]
    tweet(id: ID): Tweet
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet
    deleteTweet(id: ID): Boolean
  }
`;

// GET /api/v1/tweets
// GET /api/v1/tweets:id
// POST DELETE PUT /api/v1/tweets:id

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`서버 url ${url}`);
});
