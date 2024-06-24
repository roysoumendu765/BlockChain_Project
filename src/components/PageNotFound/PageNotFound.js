import React from 'react'
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';

const PageNotFound = () => {
const navigate = useNavigate();

const handleOnBack = () => {
    navigate('/');
}

  return (
    <div className='pagenotfound-container'>
        <h1>Oops...404 Page Not Found</h1>
        <Button variant="primary" onClick={handleOnBack}>Go Back</Button>
    </div>
  )
}

export default PageNotFound