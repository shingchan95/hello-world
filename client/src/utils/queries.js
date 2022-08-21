import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Post($username: String!) {
  user(username: $username) {
    _id
    username
    email
    friends {
      _id
      username
    }
  }
}`;



export const QUERY_POSTS = gql`
  query Posts($postId: ID!) {
    posts(postId: $postId) {
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
query Posts($postId: ID!) {
  posts(postId: $postId) {
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
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
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
}
`;
