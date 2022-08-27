import React from 'react';
import '../../styles/comment.css'

const CommentList = ({ comments = []}) => {

  if (!comments.length) {
    return <div className='pl-2'><h5>No Comments Yet</h5></div>;
  }

  return (
    <>
    <div className='pl-5'>
      <h5
        className="p-2 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments:
      </h5>
      <div className="flex-row">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-9 comment-border">
              <div className="p-3">
                <p className="card-body" style={{ fontSize: '1.25rem' }} >{comment.commentText}</p>
                <div>
                  <span style={{ fontSize: '0.825rem' }}>
                    {comment.commentAuthor}
                  </span>
                  <span style={{ fontSize: '0.825rem' }}>
                    {comment.createdAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentList;
