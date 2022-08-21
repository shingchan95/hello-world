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
<<<<<<< HEAD
      _id
      username
}
=======
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
    }
>>>>>>> 28bec4550879a15847465c870836d5b849c73909
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

