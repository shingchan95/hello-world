import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    friends{
      _id: ID!
      username: String
    }
    posts {
      _id
      postText
      createdAt
    }
  }
}

`;



export const QUERY_POSTS = gql`
  query getPosts {
    thoughts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    getSinglePost(postId: $postId) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postsText
        postsAuthor
        createdAt
      }
    }
  }
`
