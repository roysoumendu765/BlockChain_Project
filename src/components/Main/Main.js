import React, { useState, useEffect } from "react";
import CarouselDisplay from "../CarouselDisplay/CarouselDisplay";
import ReviewItem from "./ReviewItem/ReviewItem";
import FeedBackManagement from '../../contracts/FeedManagement.json';
import getWeb3 from "../../web3js/web3";
import StarRatings from 'react-star-ratings';
import Swal from "sweetalert2";
import "./Main.css";

const Main = () => {
  const [value, setValue] = useState([]);
  const [finalVal, setfinalVal] = useState([]);
  const [unsortedVal, setUnsortedVal] = useState([]);

  const changeRating = () => {

  }

  useEffect(() => {  
    return async () => {
      try {
        const web3 = await getWeb3();
        if (!window.ethereum) {
          throw new Error("MetaMask is not installed. Please install it to use this dApp.");
        }
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
          throw new Error("No accounts found. Please make sure MetaMask is unlocked.");
        }
        const contract = new web3.eth.Contract(
          FeedBackManagement.abi,
          FeedBackManagement.contractAddress
        );

        const userArr = [];
        const RatedArr = [];

        const userResponse = await contract.methods.getAllUsernames().call({from: accounts[0], gas: 3000000});
        const userLengthResponse = await contract.methods.getAllUsernamesLength().call({from: accounts[0], gas: 3000000});

        for(let i = 0; i < userLengthResponse; i++){
          userArr.push(userResponse[i]);
        }
        console.log(userArr);

        for(let i = 0; i < userArr.length; i++){
          const ratingresponse = await contract.methods.getRatingsDetails(userArr[i].emailids).call({from: accounts[0], gas: 3000000});
          const ratingresponselength = await contract.methods.getRatingDetailsLength(userArr[i].emailids).call({from: accounts[0], gas: 3000000});

          for(let j = 0; j < ratingresponselength; j++){
            RatedArr.push(ratingresponse[j]);
          }
        }
        console.log(RatedArr)
        setUnsortedVal(RatedArr);
        setValue(RatedArr);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `${error.message}`
        });
      }
    }
  }, [])

  useEffect(() => {
    return () => {
     value.sort((a,b) => {
      if (Number(a.overallrating) !== Number(b.overallrating)) {
        return Number(a.overallrating) - Number(b.overallrating); 
      }
      if (Number(a.avgsubquestion) !== Number(b.avgsubquestion)) {
        return Number(a.avgsubquestion) - Number(b.avgsubquestion); 
      }
      if (Number(a.avgoptquestion) !== Number(b.avgoptquestion)) {
        return Number(a.avgoptquestion) - Number(b.avgoptquestion); 
      }
      if (Number(a.severityrated) !== Number(b.severityrated)) {
        return Number(a.severityrated) - Number(b.severityrated); 
      }
      if (Number(a.categoryrated )!== Number(b.categoryrated)) {
        return Number(a.categoryrated) - Number(b.categoryrated); 
      }
     })

     const tempArr = []
     for(let i = 0; i < value.length - 1; i++){
        if(value[i].ratedquestion !== value[i + 1].ratedquestion){
          tempArr.push(value[i]);
        }
     }

     setfinalVal(tempArr)
     console.log(finalVal)
    }
  }, [])
  
  
  return (
    <div className="home">
      <section className="intro" style={{ backgroundImage: `url({"https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVlZGJhY2slMjB3ZWJzaXRlJTIwYmFubmVyfGVufDB8fDB8fHww"})` }}>
        <div className="intro-content">
          <h2>Welcome to the Feedback & Review Portal</h2>
          <p>Discover honest and unbiased reviews from real users. Our platform provides detailed feedback on a wide range of products and services to help you make informed decisions.</p>
        </div>
      </section>
      <h1>Featured Reviews</h1>
      <section className="carousel-section">
        <div className="card">
          <h4>{value && value[0] && value[0].ratedquestion}</h4>
          <p>Dated: {value && value[0] && value[0].datestr}</p>
          <h4><b>OverallExperience:</b> {value && value[0] && value[0].overallexperience}</h4>
          <h4><b>OverallRating:</b> 
          <StarRatings
              rating={value && value[0] && Number(value[0].overallrating)}
              starRatedColor="blue"
              numberOfStars={5}
              starDimension="25px"
              starSpacing="8px"
              name='rate'
            />
          </h4>
        </div>
        <div className="card scaled">
        <h4>{value && value[1] && value[1].ratedquestion}</h4>
          <p>Dated: {value && value[1] && value[1].datestr}</p>
          <h4><b>OverallExperience:</b> {value && value[1] && value[1].overallexperience}</h4>
          <h4><b>OverallRating:</b> 
          <StarRatings
              rating={value && value[1] && Number(value[1].overallrating)}
              starRatedColor="blue"
              numberOfStars={5}
              starDimension="25px"
              starSpacing="8px"
              name='rate'
            />
          </h4>

        </div>
        <div className="card">
        <h4>{value && value[0] && value[0].ratedquestion}</h4>
          <p>Dated: {value && value[0] && value[0].datestr}</p>
          <h4><b>OverallExperience:</b> {value && value[0] && value[0].overallexperience}</h4>
          <h4><b>OverallRating:</b> 
          <StarRatings
              rating={value && value[0] && Number(value[0].overallrating)}
              starRatedColor="blue"
              numberOfStars={5}
              starDimension="25px"
              starSpacing="8px"
              name='rate'
            />
          </h4>
        </div>
      </section>
      {/* <section className="featured-reviews">
        <h3>Recent Reviews</h3>
        <div className="reviews-list">
          {unsortedVal.map((review) => (
            <ReviewItem reviews={review} />
          ))}
        </div>
      </section> */}
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
