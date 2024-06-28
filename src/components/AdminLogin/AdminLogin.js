import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LoginRounded } from '@mui/icons-material';
import Swal from 'sweetalert2';
import getWeb3 from '../../web3js/web3';
import FeedBackManagement from '../../contracts/FeedManagement.json';
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (e) => {
    setUsername(e.target.value);
  }

  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      const result = await contract.methods.getAdminPassword().call({from: accounts[0], gas: 3000000});
      const email = username;
      const pass = password;
      if (result && (result[0] === email) && (result[1] === pass)) {
          Swal.fire({
            title: "Login Successful.",
            showCancelButton: true,
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/adminpanel');
            }
          });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error.message}`,
      });
    }
  }

  return (
    <div className='adminlogin-container'>
        <div className='inner-wrapper'>
         <h3 className='adminlogin-header'>Admin Login</h3>
        <Form className='form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={username} onChange={handleUserName}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={handleUserPassword}/>
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