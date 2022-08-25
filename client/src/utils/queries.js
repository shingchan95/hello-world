import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Query($username: String!) {
  user(username: $username) {
    _id
    username
    email
    friends {
      _id
      username
      posts {
        postText
        createdAt
      }
    }
    posts {
      _id
      postText
      createdAt
      comments {
        commentText
        createdAt
        commentAuthor
      }
    }
  }
}`;

export const QUERY_ALL_USER = gql`
  query Users {
    users {
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
query Query {
  me {
    username
    email
    friends {
      username
      email
      posts {
        _id
        postText
        createdAt
      }
    }
    posts {
      _id
      postText
      postAuthor
      createdAt
      comments {
        commentText
        commentAuthor
        createdAt
      }
    }
  }
}
`;
