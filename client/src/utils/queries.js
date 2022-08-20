import { gql } from '@apollo/client';

export const QUERY_USER = gql`
{
  users {
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
  query getPosts ($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
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
      friends {
        _id
        username
      }
    }
  }`;


export const QUERY_SINGLE_POST = gql`
  query getSinglePost ($postId: ID!) {
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
  query me {
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
        _id
          commentText
          commentAuthor
          createdAt
        }
      }
    }
  }
`;
