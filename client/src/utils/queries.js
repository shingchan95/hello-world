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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      _id
      username
>>>>>>> parent of 28bec45 (update on comment list)
=======
      _id
      username
>>>>>>> parent of 28bec45 (update on comment list)
=======
      _id
      username
>>>>>>> parent of 28bec45 (update on comment list)
=======
      _id
      username
>>>>>>> parent of 28bec45 (update on comment list)
    }
>>>>>>> 28bec4550879a15847465c870836d5b849c73909
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
}`;

