// Import the React library
import React from 'react';
import faker from 'faker';

// Create a react component (function based)
const CommentDetail = (props) => {
    console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;