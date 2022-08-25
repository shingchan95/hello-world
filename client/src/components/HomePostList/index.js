import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

const HomePostList = ({
  data,
  showTitle = true,
  showUsername = true,
}) => {

  if (!data) {
    return <h3>No Posts Yet?</h3>;
  }

  return (
    <div>
      {/* {showTitle && <h3>{title}</h3>} */}
      {data &&
        data.map((users, index) => (
          <div key={index}>

          {users.posts.map((post, i)=> ( 
            
            <div key={i} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                className="text-light"
                to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    posted on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                     {users.username}posted on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{post.postText}</p>
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
