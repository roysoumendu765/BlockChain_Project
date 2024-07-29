import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import StarRatings from 'react-star-ratings';
import { Logout } from '@mui/icons-material';
import { Home } from '@mui/icons-material';
import { Reviews } from '@mui/icons-material';
import { Settings } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';
import Button from 'react-bootstrap/Button';
import { CheckBoxOutlineBlank } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router';
import FeedBackManagement from '../../contracts/FeedManagement.json';
import getWeb3 from '../../web3js/web3';
import Swal from 'sweetalert2';
import bigInt from 'big-integer';

const Dashboard = () => {
  const location = useLocation();
  const { data } = location.state || {};

  const [availabledata, setAvailableData] = useState([]);
  const [incomingdata, setIncomingData] = useState([]);
  const [expireddata, setExpiredData] = useState([]);
  const [attempeddata, setAttempedData] = useState([]);
  const [rating, setRating] = useState(3);
  const [responseData, setResponseData] = useState({});

  const availableArr = [];
  const incomingArr = [];
  const expiredArr = [];
  const attemptedArr = [];

  const [status, setStatus] = useState({
    isHome: true,
    isSettings: false,
    isReviews: false
  });

  const [toggle, setToggle] = useState({
    isDark: false,
    isLocked: false
  });

  const navigate = useNavigate();

  const getNumberOfDays = (givenDate) => {
    const today = new Date();
    const dateToCompare = new Date(givenDate);
    const differenceMs = today - dateToCompare;
    const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    return Math.abs(daysDifference);
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

        const responseSize = await contract.methods.getfeedbackdatacount().call({ from: accounts[0], gas: 3000000 });
        console.log(responseSize);
        const response = await contract.methods.getAllfeedbacks().call({ from: accounts[0], gas: 3000000 });
        console.log(response);
        console.log(typeof response);
        
        setResponseData(response)

        for (let i = 0; i < responseSize; i++) {
          console.log(typeof response[i].datestr);
          const daydifference = getNumberOfDays(response[i].datestr);
          console.log(daydifference);
          if (daydifference >= 0 && daydifference < 7) {
            availableArr.push(response[i])
          } else if (daydifference >= 7) {
            incomingArr.push(response[i]);
          } else if (daydifference < 0) {
            expiredArr.push(response[i]);
          }
        }

        console.log(availableArr);
        console.log(incomingArr);
        console.log(expiredArr);

        const attempedResponseSize = await contract.methods.getReviewsDataLength(data[2]).call({ from: accounts[0], gas: 3000000 });
        console.log(responseSize);
        const attemptedResponse = await contract.methods.getAllReviwsData(data[2]).call({ from: accounts[0], gas: 3000000 });

        for (let i = 0; i < attempedResponseSize; i++) {
          attemptedArr.push(attemptedResponse[i]);
        }

        setAvailableData(availableArr);
        setIncomingData(incomingArr);
        setExpiredData(expiredArr);
        setAttempedData(attemptedArr);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `${error.message}`,
        });
      }
    }
  }, []);

  const ratingNum = [1, 2, 3, 4, 5];
  const togglestatus = [1, 2];
  const ratings = [
    {
      id: 1,
      val: 5
    },
    {
      id: 1,
      val: 4
    },
    {
      id: 1,
      val: 3
    },
    {
      id: 1,
      val: 2
    },
    {
      id: 1,
      val: 1
    },
  ];

  const [reviewStatus, setReviewStatus] = useState([]);

  const changeRating = () => {

  }

  const handleOntoggle = (e, value) => {
    if (value === 'mode') {
      setToggle(prevState => ({ ...prevState, isDark: e.target.checked }));
    } else if (value === 'lock') {
      setToggle(prevState => ({ ...prevState, isLocked: e.target.checked }));
    }
    console.log(toggle);
  }

  const handleOnLogout = () => {
    navigate('/');
  }

  const handleOnHome = () => {
    setStatus(prevState =>
      ({ ...prevState, isHome: true, isSettings: false, isReviews: false })
    );
  }

  const handleOnReviews = async () => {
    setStatus(prevState =>
      ({ ...prevState, isHome: false, isSettings: false, isReviews: true })
    );
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

      const responseSize = await contract.methods.getReviewsDataLength(data[2]).call({ from: accounts[0], gas: 3000000 });
      console.log(responseSize);
      const response = await contract.methods.getAllReviwsData(data[2]).call({ from: accounts[0], gas: 3000000 });
      console.log(response);

      const tempdata = [];

      for (let i = 0; i < responseSize; i++) {
        tempdata.push(response[i]);
      }

      console.log(tempdata);
      setReviewStatus(tempdata)
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleOnSettings = () => {
    setStatus(prevState =>
      ({ ...prevState, isHome: false, isSettings: true, isReviews: false })
    );
  }

  const handledeleteReviews = async (e, index) => {
    console.log(e);
    console.log(index);
    e.preventDefault();
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
      const contract = new web3.eth.Contract(FeedBackManagement.abi, FeedBackManagement.contractAddress);
      try {
        console.log("start");
        await contract.methods.removeReviewsDataAtIndex(data[2],index).call({ from: accounts[0], gas: 3000000 });
        console.log("end");
      } catch (error) {
        console.log(error);
      }
      const updatedList = await contract.methods.getAllReviwsData(data[2]).call({ from: accounts[0], gas: 3000000 });
      const updatedListLength = await contract.methods.getReviewsDataLength(data[2]).call({ from: accounts[0], gas: 3000000 });

      console.log(updatedList);

      const tempReviews = [];

      for (let i = 0; i < updatedListLength; i++) {
        tempReviews.push(updatedList[i]);
      }
      setReviewStatus(tempReviews);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error.message}`,
      });
    }
  }

  const handleTabAttemped = () => {
    console.log("Clicked Attemped!")
  }

  const handleTabAvailable = () => {
    console.log("Clicked Available!")
  }
  const handleTabIncoming = () => {
    console.log("Clicked Incoming!")
  }
  const handleTabExpired = () => {
    console.log("Clicked Expired!")
  }

  const handleOnAvailableAttempt = async(e, index) => {

  }

  const handlePostButton = () => {
    console.log(responseData);
    navigate('/feedbackform', {state: {data: responseData, userData: data[2]}})
  }

  return (
    <div className='main-wrapper'>
      <h1 className='main-heading'>{(status.isHome === true) ? `Welcome, ${data[1].split(" ")[0]}` : (status.isReviews === true) ? 'Reviews' : 'Settings'}</h1>
      <div className='inner-wrapper-dashboard'>
        <div className='sidebar'>
          <ul className='list-parent'>
            <li className='list-item' onClick={handleOnHome}>
              <span><Home /></span>
              <span>HOME</span>
            </li>
            <li className='list-item' onClick={handleOnReviews}>
              <span><Reviews /></span>
              <span>REVIEWS</span>
            </li>
            <li className='list-item' onClick={handleOnSettings}>
              <span><Settings /></span>
              <span>SETTINGS</span>
            </li>
          </ul>
          <button className='btn-black' onClick={handleOnLogout}>
            <Logout /> Logout
          </button>
        </div>
        {
          status.isHome === true ? <div className='main-dashboard'>
            <div className='profile-section mb-3'>
              <div className='left-pane'>
                <div className='profile-pic mb-2'>
                  <img className='profile-circle' src="" alt="" />
                </div>
                <h3 className='profile-name'>{data[1]}</h3>
              </div>
              <div className='right-pane'>
                <div className='rating-vals'>
                  {
                    ratingNum.map(val => {
                      return (
                        <p>{val}</p>
                      )
                    })
                  }
                </div>
                <div className='star-ratings'>
                  {
                    ratings.map((res) => {
                      return (
                        <StarRatings
                          key={res.id}
                          rating={res.val}
                          starRatedColor="blue"
                          changeRating={changeRating}
                          numberOfStars={5}
                          starDimension="25px"
                          starSpacing="8px"
                          name='rate'
                        />
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-3 mb-3'> 
                  <Button onClick={handlePostButton}>Submit</Button>
            </div>
            <div className='tab-panel'>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" onClick={handleTabAvailable}>AVAILABLE</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={handleTabIncoming}>INCOMING</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" onClick={handleTabAttemped}>ATTEMPTED</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="expired-tab" data-bs-toggle="tab" data-bs-target="#expired" type="button" role="tab" aria-controls="expired" aria-selected="false" onClick={handleTabExpired}>EXPIRED</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  {
                    availabledata.map((val, index) => {
                      return (
                        <div className="available-main" key={index}>
                          <div className='available-top'>
                            <div className='available-top-left'>{val.question}</div>
                            <div className='available-top-right'>
                              <span>Dated: </span>
                              <span>{val.datestr}</span>
                            </div>
                          </div>
                          <div className='available-bottom'>
                            <Button className='btn btn-attempt' onClick={(e) => handleOnAvailableAttempt(e, index)}>
                              Attempt
                            </Button>
                          </div> 
                        </div>
                      )
                    })
                  }
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  {incomingdata.map((val, index) => {
                    return (
                      <div className="downtab-list" key={index}>
                        <div className="downtab-list-top">
                          <div className='downtab-list-top-left'>
                            <span>Dated: </span>
                            <span><b>{val.datestr}</b></span>
                          </div>
                          <div className='downtab-list-top-right'>
                            Incoming
                          </div>
                        </div>
                        <div className="downtab-list-bottom">
                          <div className='downtab-list-bottom-left'>
                            <p>{val.question}</p>
                          </div>
                          <div className='downtab-list-bottom-right'>
                            <StarRatings
                              className='reviews-ratings'
                              rating={0}
                              starRatedColor="yellow"
                              numberOfStars={5}
                              starDimension="20px"
                              starSpacing="6px"
                              name='rate'
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  {
                    attempeddata.map((val, index) => {
                      return (
                        <div className="downtab-list" key={index}>
                          <div className="downtab-list-top">
                            <div className='downtab-list-top-left'>
                              <span>Dated: </span>
                              <span><b>{val.datestr}</b></span>
                            </div>
                            <div className='downtab-list-top-right'>
                              Attempted
                            </div>
                          </div>
                          <div className="downtab-list-bottom">
                            <div className='downtab-list-bottom-left'>
                              <p>{val.question}</p>
                            </div>
                            <div className='downtab-list-bottom-right'>
                              <StarRatings
                                className='reviews-ratings'
                                rating={0}
                                starRatedColor="yellow"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="6px"
                                name='rate'
                              />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="tab-pane fade" id="expired" role="tabpanel" aria-labelledby="expired-tab">
                  {
                    expireddata.map((val, index) => {
                      return (
                        <div className="downtab-list" key={index}>
                          <div className="downtab-list-top">
                            <div className='downtab-list-top-left'>
                              <span>Dated: </span>
                              <span><b>{val.datestr}</b></span>
                            </div>
                            <div className='downtab-list-top-right'>
                              Expired
                            </div>
                          </div>
                          <div className="downtab-list-bottom">
                            <div className='downtab-list-bottom-left'>
                              <p>{val.question}</p>
                            </div>
                            <div className='downtab-list-bottom-right'>
                              <StarRatings
                                className='reviews-ratings'
                                rating={0}
                                starRatedColor="yellow"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="6px"
                                name='rate'
                              />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div> :
            status.isReviews === true ?
              <div className='main-dashboard reviews'>
                {reviewStatus.length > 0 ?
                  reviewStatus.map((items, index) => {
                    return (
                      <>
                        {items.param3 && <div className='reviews-list' key={index}>
                          <div className='reviews-list-top'>
                            <div className='list-top-left'>
                              <span>Dated: </span>
                              <span><b>{items.param2}</b></span>
                            </div>
                            <div className='list-top-right' onClick={(e) => handledeleteReviews(e, index)}>
                              <Delete />
                            </div>
                          </div>
                          <div className='reviews-list-bottom'>
                            <div className='list-bottom-left'>
                              <p>{items.param1}</p>
                            </div>
                            <div className='list-bottom-right'>
                              <StarRatings
                                className='reviews-ratings'
                                rating={parseInt(items.param3)}
                                starRatedColor="yellow"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="6px"
                                name='rate'
                              />
                            </div>
                          </div>
                        </div>}
                      </>
                    )
                  }) : <h2 className='text-center text-danger w-100 d-flex justify-content-center align-items-center mt-2 p-3'> NO RECORDS FOUND </h2>
                }
              </div> :
              <div className='main-dashboard settings'>
                <h1 className='heading-settings'>Settings</h1>
                <div className='settings-wrapper'>
                  <div className='settings1'>
                    <label className="switch">
                      <input type="checkbox" value={toggle.isDark} onChange={(e) => handleOntoggle(e, 'mode')} />
                      <span className="slider round"></span>
                    </label>
                    <label className="switch">
                      <input type="checkbox" value={toggle.isLocked} onChange={(e) => handleOntoggle(e, 'lock')} />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className='settings2'></div>
                </div>
              </div>
        }
        <div className='side-cards'>
          {
            [1, 2, 3].map(element => {
              return (
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard;