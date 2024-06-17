import React, { useState } from 'react';
import feedbackList from '../feedbackList/feedbackList';
import searchFeedback from '../searchFeedback/searchFeedback';
import './Main.css';

const Main = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <searchFeedback setValue={setValue}/>
      <feedbackList value={value}/>
    </div>
  )
}

export default Main