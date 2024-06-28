import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import StarRatings from 'react-star-ratings';
import { Logout } from '@mui/icons-material';
import { Home } from '@mui/icons-material';
import { Reviews } from '@mui/icons-material';
import { Settings } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';
import { CheckBoxOutlineBlank } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Dashboard = () => {
  const {state} = useLocation();
  const Logindata = state && state.data;
  console.log(Logindata);
  
  const [rating, setRating] = useState(3);
  const [status, setStatus] = useState({
    isHome: true,
    isSettings: false,
    isReviews: false
  });

  const [toggle, setToggle] = useState({
    isDark: false,
    isLocked: false
  })

  const navigate = useNavigate();

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

  const reviewDetials = [
    {
      id: 1,
      reviewDate: '10-02-2023',
      reviewItem: 'Review Item 1',
      rated: 4
    },
    {
      id: 2,
      reviewDate: '12-04-2023',
      reviewItem: 'Review Item 2',
      rated: 3
    },
    {
      id: 3,
      reviewDate: '10-06-2023',
      reviewItem: 'Review Item 3',
      rated: 5
    },
    {
      id: 4,
      reviewDate: '20-07-2023',
      reviewItem: 'Review Item 4',
      rated: 5
    },
    {
      id: 5,
      reviewDate: '25-11-2023',
      reviewItem: 'Review Item 5',
      rated: 4
    }
  ]

  const [reviewStatus, setReviewStatus] = useState(reviewDetials);

  const changeRating = () => {

  }

  const handleOntoggle = (e, value) => {
    if(value === 'mode'){
      setToggle(prevState => ({...prevState, isDark: e.target.checked}));
    } else if(value === 'lock') {
      setToggle(prevState => ({...prevState, isLocked: e.target.checked}));
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

  const handleOnReviews = () => {
    setStatus(prevState =>
      ({ ...prevState, isHome: false, isSettings: false, isReviews: true })
    );
  }

  const handleOnSettings = () => {
    setStatus(prevState =>
      ({ ...prevState, isHome: false, isSettings: true, isReviews: false })
    );
  }

  const handledeleteReviews = (index) => {
    const newList = reviewStatus.filter((_, i) => i !== index);
    setReviewStatus(newList);
  }

  return (
    <div className='main-wrapper'>
      <h1 className='main-heading'>{(status.isHome === true) ? 'DashBoard' : (status.isReviews === true) ? 'Reviews' : 'Settings'}</h1>
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
                <h3 className='profile-name'>Alex</h3>
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
            <div className='tab-panel'>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">AVAILABLE</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">INCOMING</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">ATTEMPTED</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="expired-tab" data-bs-toggle="tab" data-bs-target="#expired" type="button" role="tab" aria-controls="expired" aria-selected="false">EXPIRED</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="tab-pane fade" id="expired" role="tabpanel" aria-labelledby="expired-tab">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
            </div>
          </div> :
            status.isReviews === true ?
              <div className='main-dashboard reviews'>
                {
                  reviewStatus.map((items, index) => {
                    return (
                      <div className='reviews-list' key={items.id}>
                        <div className='reviews-list-top'>
                          <div className='list-top-left'>
                            <span>Dated: </span>
                            <span>{items.reviewDate}</span>
                          </div>
                          <div className='list-top-right' onClick={() => handledeleteReviews(index)}>
                            <Delete />
                          </div>
                        </div>
                        <div className='reviews-list-bottom'>
                          <div className='list-bottom-left'>
                            <p>{items.reviewItem}</p>
                          </div>
                          <div className='list-bottom-right'>
                            <StarRatings
                              className='reviews-ratings'
                              rating={items.rated}
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
              </div> :
              <div className='main-dashboard settings'>
                <h1 className='heading-settings'>Settings</h1>
                <div className='settings-wrapper'>
                  <div className='settings1'>
                    <label className="switch">
                      <input type="checkbox" value={toggle.isDark} onChange={(e) => handleOntoggle(e,'mode')} />
                      <span className="slider round"></span>
                    </label>
                    <label className="switch">
                      <input type="checkbox" value={toggle.isLocked} onChange={(e) => handleOntoggle(e,'lock')} />
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