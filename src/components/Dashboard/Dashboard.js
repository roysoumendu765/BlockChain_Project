import React, { useState } from 'react';
import './Dashboard.css';
import StarRatings from 'react-star-ratings';

const Dashboard = () => {
  const [rating, setRating] = useState(3);

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
  const changeRating = () => {

  }

  const menulist = [
    {
      id: 1,
      name: "INCOMING"
    },
    {
      id: 2,
      name: "AVAILABLE"
    },
    {
      id: 3,
      name: "ATTEMPTED"
    },
    {
      id: 4,
      name: "EXPIRED"
    }
  ]
  return (
    <div className='main-wrapper'>
      <h1 className='main-heading'>DashBoard</h1>
      <div className='inner-wrapper'>
        <div className='sidebar'>
        </div>
        <div className='main-dashboard'>
          <div className='profile-section mb-3'>
            <div className='left-pane'>
              <div className='profile-pic mb-2'>
                <img className='profile-circle' src="" alt="" />
              </div>
              <h3 className='profile-name'>Alex</h3>
            </div>
            <div className='right-pane'>
              {
                ratings.map((res) => {
                  return (
                    <StarRatings
                      key={res.id}
                      rating={res.val}
                      starRatedColor="blue"
                      changeRating={changeRating}
                      numberOfStars={5}
                      starDimension="30px"
                      starSpacing="10px"
                      name='rate'
                    />
                  )
                })
              }
            </div>
          </div>
          <div className='top-menu-buttons'>
            {menulist.map((val, index) => {
              return (
                <button key={val.id} className={`btn-${index}`}>
                  {val.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;