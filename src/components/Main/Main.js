import React, { useState } from "react";
import FeedbackList from "../FeedbackList/FeedbackList";
import SearchFeedback from "../SearchFeedback/SearchFeedback";
import CarouselDisplay from "../CarouselDisplay/CarouselDisplay";
import ReviewItem from "./ReviewItem/ReviewItem";
import "./Main.css";

const reviews = [
  { id: 1, param1: "", param2: "", param3: "" },
  { id: 2, param1: "", param2: "", param3: "" },
  { id: 3, param1: "", param2: "", param3: "" },
];
//To be read from contract

const Main = () => {
  const [value, setValue] = useState("");
  return (
    <div className="home">
      <section className="intro" style={{ backgroundImage: `url({"https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVlZGJhY2slMjB3ZWJzaXRlJTIwYmFubmVyfGVufDB8fDB8fHww"})` }}>
        <div className="intro-content">
          <h2>Welcome to the Feedback & Review Portal</h2>
          <p>Discover honest and unbiased reviews from real users. Our platform provides detailed feedback on a wide range of products and services to help you make informed decisions.</p>
        </div>
      </section>
      <section className="carousel-section">
        <h3>Featured Reviews</h3>
        <CarouselDisplay reviews={reviews} />
      </section>
      <section className="featured-reviews">
        <h3>Recent Reviews</h3>
        <div className="reviews-list">
          {reviews.map((review) => (
            <ReviewItem key={review.param1} title={review.param2} content={review.param3} />
          ))}
        </div>
      </section>
    </div>
  //   <div className="mainpage-container">
  //     <div className="mainpage-image">
  //       <div className="mainpage-title">
  //         <h1 className="mainpage-heading">FEEDBACK AND REVIEW PORTAL</h1>
  //       </div>
  //       <div>
  //         <h2 className="mainpage-description">Welcome to our feedback and review portal.</h2>
  //       </div>
  //     </div>
  //     <div>
  //     <p className="mainpage-description"> Discover honest and unbiased reviews from real users.<br/>
  //        Our platform provides detailed feedback to help you make informed decisions.<br/>
  //        Here you can submit or find other user's feedback and reviews.</p>
  //     </div>
  //     <div className="feedback-section">
  //       {/* <FeedbackList value={value} /> */}
  //     </div>
  //     {/* <Searchfeedback setValue={setValue}/>
  //     <FeedbackList value={value}/> */}
  //   </div>
  // );
        );
};

export default Main;
