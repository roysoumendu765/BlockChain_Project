import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { useNavigate } from 'react-router';
import { LoginRounded, AppRegistration } from '@mui/icons-material';
import FeedBackManagement from '../../contracts/FeedManagement.json';
import getWeb3 from '../../web3js/web3';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginstatus, setLoginStatus] = useState({
    isLogin: true,
    isRegister: false
  });

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log("Register form submitted");
    try {
      console.log("Getting Web3 instance...");
      const web3 = await getWeb3();
      console.log("Web3 instance obtained:", web3);

      if (!window.ethereum) {
        throw new Error("MetaMask is not installed. Please install it to use this dApp.");
      }

      console.log("Requesting MetaMask account access...");
      await window.ethereum.enable();

      const accounts = await web3.eth.getAccounts();
      console.log("Accounts obtained:", accounts);

      if (accounts.length === 0) {
        throw new Error("No accounts found. Please make sure MetaMask is unlocked.");
      }

      const contract = new web3.eth.Contract(
        FeedBackManagement.abi,
        FeedBackManagement.contractAddress
      );
      console.log("Contract instance obtained:", contract);

      const username = email; // Assuming `email` is used as `username`
      console.log(name, username, password);

      await contract.methods.registerUser(String(name), String(email), String(password)).send({from: accounts[0], gas: 3000000});
      console.log("User registered successfully");

      Swal.fire({
        title: "Success",
        text: `${name} registered successfully`,
        icon: "success"
      });

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.error("Error occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error.message}`,
      });
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    try {
      const web3 = await getWeb3();
      console.log("Web3 instance obtained:", web3);

      if (!window.ethereum) {
        throw new Error("MetaMask is not installed. Please install it to use this dApp.");
      }

      console.log("Requesting MetaMask account access...");
      await window.ethereum.enable();

      const accounts = await web3.eth.getAccounts();
      console.log("Accounts obtained:", accounts);

      if (accounts.length === 0) {
        throw new Error("No accounts found. Please make sure MetaMask is unlocked.");
      }

      const contract = new web3.eth.Contract(
        FeedBackManagement.abi,
        FeedBackManagement.contractAddress
      );
      console.log("Contract instance obtained:", contract);

      const result = await contract.methods.getPassword(String(email)).call({from: accounts[0], gas: 3000000});
      console.log(result);
      if (result && result[0] && result[0] !== "") {
        const response = result;
        console.log("called1");
        if (password === result[0]) {
          console.log("called2");
          Swal.fire({
            title: "Login Successful.",
            showCancelButton: true,
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/dashboard', {state: {data: response}});
            }
          });
        }
      }
      console.log("called3")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error.message}`,
      });
    }
  };

  const handleLogin = () => {
    setLoginStatus(prevState => ({ ...prevState, isLogin: true, isRegister: false }));
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleRegister = () => {
    setLoginStatus(prevState => ({ ...prevState, isLogin: false, isRegister: true }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className='main-container'>
      <div className='inner-container'>
        <div className='left-side'>
          <Carousel className='carousel' >
            {/* Carousel items */}
          </Carousel>
        </div>
        <div className='right-side'>
          <h3 className='top-heading'>{loginstatus.isLogin === true ? 'LOGIN' : 'REGISTRATION'}</h3>
          <div className='button-wrapper'>
            <button className='btn blackbtn' onClick={handleLogin}>Login <LoginRounded /></button>
            <button className='btn blackbtn' onClick={handleRegister}>Register <AppRegistration /></button>
          </div>

          {loginstatus.isLogin === true ? (
            <Form className='form' onSubmit={handleLoginSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmail} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />
              </Form.Group>
              <Button type="submit" className='btn-submit'>Login</Button>
            </Form>
          ) : (
            <Form className='form' onSubmit={handleRegisterSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={handleName} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmail} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />
              </Form.Group>
              <Button type="submit" className='btn-submit'>Register</Button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
