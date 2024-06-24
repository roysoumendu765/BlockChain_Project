import React from 'react';
import { useNavigate } from 'react-router';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LoginRounded } from '@mui/icons-material';
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/adminpanel');
  }

  return (
    <div className='adminlogin-container'>
        <div className='inner-wrapper'>
         <h3 className='adminlogin-header'>Admin Login</h3>
        <Form className='form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit" className='btn-submit'>
              <LoginRounded/>Login
            </Button>
          </Form>
        </div>
    </div>
  )
}

export default AdminLogin