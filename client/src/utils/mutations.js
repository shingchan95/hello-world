import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      username
      _id
    }
  }
}
`;

export const ADD_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
mutation AddPost($postText: String!, $postAuthor: String!) {
  addPost(postText: $postText, postAuthor: $postAuthor) {
    _id
    postText
    postAuthor
    createdAt
  }
}
`;

export const ADD_COMMENT = gql`
mutation AddComment($postId: ID!, $commentText: String!, $commentAuthor: String!) {
  addComment(postId: $postId, commentText: $commentText, commentAuthor: $commentAuthor) {
    _id
    postText
    postAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`
export const ADD_FRIEND = gql`
mutation Mutation($userId: ID!) {
  addFriend(userId: $userId) {
    username
    posts {
      postText
      createdAt
    }
  }
}`;

export const REMOVE_POST = gql`
mutation RemovePost($postId: ID!) {
  removePost(postId: $postId) {
    _id
    postText
    postAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`
export const REMOVE_COMMENT = gql`
mutation RemovePost($postId: ID!, $commentId: ID!) {
  removeComment(postId: $postId, commentId: $commentId) {
    _id
    postText
    postAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;
