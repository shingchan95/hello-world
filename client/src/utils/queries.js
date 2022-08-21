import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Post($username: String!) {
  user(username: $username) {
    _id
    username
    email
    password
    friends {
      _id
      username
    }
    posts {
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
}`;



export const QUERY_POSTS = gql`
  query Post($postId: ID!) {
    post(postId: $postId) {
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
  }`;


export const QUERY_SINGLE_POST = gql`
query Post($postId: ID!) {
  post(postId: $postId) {
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
}`;

export const QUERY_ME = gql`
query Me {
  me {
    _id
    username
    email
    password
    friends {
      _id
      username
}
    posts {
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
}`;

