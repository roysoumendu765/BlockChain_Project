import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ title, content }) => {
  return (
    <div className="review-item">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default ReviewItem;