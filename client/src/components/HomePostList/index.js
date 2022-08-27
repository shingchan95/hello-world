import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import '../../styles/homepost.css';

const HomePostList = ({
  data,
}) => {
  
  if (!data) {
    return <h3>No Posts Yet?</h3>;
  }

  return (
    <div className='homepost col-md-8'>
      {data &&
        data.map((users, index) => (
          <div key={index}>
          {users.posts.map((post, i)=> ( 
            <div key={i} className="card mb-3">
            <h4 className="p-2 m-0">
                  <Link to={`/profiles/${users.username}`} >
                    <p style={{ fontSize: '1.5rem' }}>
                      {users.username}
                    </p>
                  </Link>
                  <p style={{ fontSize: '0.9rem' }}>{post.createdAt}</p>
            </h4>
            <div className=" p-2">
              <p style={{ fontSize: '1.8rem' }}>{post.postText}</p>
            </div>
            <CommentList comments={post.comments} />
            <CommentForm
              className="btn btn-primary btn-block btn-squared"
              postId={post._id}
              />
          
          </div>
         ))}
       </div>
        ))}
    </div>
  );
};

export default HomePostList;
