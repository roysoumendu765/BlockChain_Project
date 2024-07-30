import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
  console.log(props)
  return (
    <div className="review-item">
      <h4>{props.ratedquestion}</h4>
      <p>{props.datestr}</p>
      <p>{props.overallexperience}</p>
    </div>
  );
};

export default ReviewItem;