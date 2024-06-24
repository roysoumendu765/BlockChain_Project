import React, { useState } from 'react';
import { AddCircle } from '@mui/icons-material';
import { CloseButton } from 'react-bootstrap';
import './Adminpanel.css';

const Adminpanel = () => {
    const [showmodal, setshowModal] = useState(false);

    const handleFeedBackForm = () => {
        setshowModal(true);
    }

    const handleModalClose = () => {
        setshowModal(false);
    }

  return (
    <div className='main-admin-container'>
        {
        showmodal && <div className='modal-container'>
            <CloseButton onClick={handleModalClose}/>
        </div>
        }
        <div className='heading-admin-top'>
             <button className='post-btn' onClick={handleFeedBackForm}>
               <AddCircle/> Add New Feedback
             </button>
            <h2>Welcome, Admin</h2>
        </div>
        <div className='data-panel'>
            <div className='card bg-primary '>
                <div className='card-body'></div>
            </div>
            <div className='card bg-success text-white'>
                <div className='card-body'></div>
            </div>
            <div className='card bg-danger'>
                <div className='card-body'></div>
            </div>
            <div className='card bg-warning text-white'>
                <div className='card-body'></div>
            </div>
        </div>
    </div>
  )
}

export default Adminpanel