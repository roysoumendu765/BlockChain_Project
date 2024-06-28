import React, { useState } from 'react';
import { AddCircle } from '@mui/icons-material';
import { Clear } from '@mui/icons-material';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Adminpanel.css';

const Adminpanel = () => {
    const [showmodal, setshowModal] = useState(false);

    const handleFeedBackForm = () => {
        setshowModal(true);
    }

    const handleModalClose = () => {
        setshowModal(false);
    }

    const handleSubmit = () => {

    }

    return (
        <div className={"main-admin-container " + (showmodal ? 'backdropclass' : ' ')}>
            {
                showmodal && <div className='modal-container'>
                    <div className='clear-btn'>
                        <Clear onClick={handleModalClose} />
                    </div>
                    <div className='form-main-container'>
                        <Form className='form' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicQuery">
                                <Form.Label>Query</Form.Label>
                                <Form.Control as="textarea" placeholder="Post Your Question" />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Insert An Image</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <Button type="submit" className='btn-submit'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            }
            <div className='heading-admin-top'>
                <button className='post-btn' onClick={handleFeedBackForm}>
                    <AddCircle /> Add New Feedback
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