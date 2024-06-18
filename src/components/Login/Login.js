import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { } from '../../components/Login/img/login_c1.jpg'

const Login = () => {
  return (
    <div className='main-container'>
      <div className='inner-container'>
        <div className='left-side'>
          <Carousel className='carousel' >
            <Carousel.Item interval={10000}>
              <img
                className="d-block w-100" src="./img/login_c1.jpg"
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
          <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text >
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login;