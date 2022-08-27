import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST} from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';
import '../../styles/postform.css';

const PostForm = () => {
  const [postText, setPostText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST
    , {
    update(cache, { data: { addPost} }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS })

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
  
    },
  }
  );

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: Auth.getProfile().data.username,
        },

      });

      setPostText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='col-md-8 postform'>
      <div className='card'>
      <div className='pt-4'>
        <p style={{ fontSize: '1.8rem' }}>Share your mind!</p>
      </div>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center textarea"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-10 mx-auto">
              <textarea
                name="postText"
                placeholder="Here's a new post..."
                value={postText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>


            <div>
                <p
                  className={`m-0 pl-2 ${
                    characterCount === 280 || error ? 'text-danger' : ''
                  }`}
                  >
                Character Count: {characterCount}/280
                </p>
            </div>
            <div className="col-12 col-lg-2">
              <button className="btn btn-primary py-3 display-block" type="submit">
                Add Post
              </button>
            </div>
         

            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in order to make a post . Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
      </div>
    </div>
  );
};

export default PostForm;
