import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const menulist = [
    {
      id: 1,
      name: "INCOMING"
    },
    {
      id: 2,
      name:"AVAILABLE"
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
    <div className='main-dashboard'>
        <h1>DashBoard</h1>
        <div className='profile-section'>
        </div>
        <div className='top-menu-buttons'>
          {menulist.map((val, index) => {
            return(
            <button key={val.id} className={`btn-${index}`}>
              {val.name}
            </button>
            )
          })}
        </div>
    </div>
  )
}

export default Dashboard;