import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { useNavigate } from 'react-router';
import { LoginRounded } from '@mui/icons-material';
import { AppRegistration } from '@mui/icons-material';

const Login = () => {
  const navigate = useNavigate();
  const [loginstatus, setLoginStatus] = useState({
    isLogin: true,
    isRegister: false
  });

  const handleSubmit = () => {
    navigate('/dashboard');
  }

  const handleLogin = () => {
    setLoginStatus(prevState => ({...prevState, isLogin: true, isRegister: false}))
    console.log(loginstatus)
  }

  const handleRegister = () => {
    setLoginStatus(prevState => ({...prevState, isLogin: false, isRegister: true}))
    console.log(loginstatus)
  }

  return (
    <div className='main-container'>
      <div className='inner-container'>
        <div className='left-side'>
          <Carousel className='carousel' >
            <Carousel.Item interval={10000}>
              <img
                className="d-block w-100" src='./login_c1.jpg'
                alt="One"
              />
              <Carousel.Caption>
                <h3>Label for first slide</h3>
                <p>Sample Text for Image One</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100" src="./img/login_c2.jpg"
                alt="Two"
              />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100" src="./img/login_c3.jpg"
                alt="Three"
              />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100" src="./img/login_c4.jpg"
                alt="Four"
              />
              <Carousel.Caption>
                <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='right-side'>
          <h3 className='top-heading'>{loginstatus.isLogin === true ? 'LOGIN' : 'REGISTRATION'}</h3>
          <div className='button-wrapper'>
            <button className='btn blackbtn' onClick={handleLogin}>Login <LoginRounded/></button>
            <button className='btn blackbtn' onClick={handleRegister}>Register <AppRegistration /></button>
          </div>

          {loginstatus.isLogin === true ? <Form className='form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit" className='btn-submit'>
              {loginstatus.isLogin === true ? 'Submit' : loginstatus.isRegister === true ? 'Register' : 'Submit'}
            </Button>
          </Form> : <Form className='form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit" className='btn-submit'>
              {loginstatus.isLogin === true ? 'Submit' : loginstatus.isRegister === true ? 'Register' : 'Submit'}
            </Button>
          </Form>}
        </div>
      </div>
    </div>
  )
}

export default Login;