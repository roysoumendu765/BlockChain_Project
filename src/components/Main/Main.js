import React, { useState } from "react";
import FeedbackList from "../feedbackList/FeedbackList";
import Searchfeedback from "../SearchFeedback/SearchFeedback";
import "./Main.css";

const Main = () => {
  const [value, setValue] = useState("");
  return (
    <div className="mainpage-container">
      Main Page
      <h1 className="mainpage-title">Main Page</h1>
      <div className="search-section">
        {/* <SearchFeedback setValue={setValue} /> */}
      </div>
      <div className="feedback-section">
        {/* <FeedbackList value={value} /> */}
      </div>
      {/* <Searchfeedback setValue={setValue}/>
      <FeedbackList value={value}/> */}
    </div>
  );
};

export default Main;
