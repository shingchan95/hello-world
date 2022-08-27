const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    friends: [User]
    posts: [Post]
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID!
    commentText: String
    commentAuthor: String
    createdAt: String

  }
  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]!
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    addFriend(userId: ID!): User
    addPost(postText: String!, postAuthor: String!): Post
    addComment(postId:ID!, commentText: String!, commentAuthor: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    removeFriend(userId: ID!): User
  }
`;

module.exports = typeDefs;
