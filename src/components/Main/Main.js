import React, { useState } from 'react';
import FeedbackList from '../FeedbackList/FeedbackList';
import Searchfeedback from '../Searchfeedback/Searchfeedback';
import './Main.css';

const Main = () => {
  const [value, setValue] = useState('');
  return (
    <div className='mainpage-container'>
      Main Page
      {/* <Searchfeedback setValue={setValue}/>
      <FeedbackList value={value}/> */}
    </div>
  )
}

export default Main;