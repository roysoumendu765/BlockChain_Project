import React, { useState } from "react";
import './contactUs.css';
import Swal from "sweetalert2";
import FeedBackManagement from '../../contracts/FeedManagement.json';
import getWeb3 from "../../web3js/web3";

const ContactUs = () => {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const web3 = await getWeb3();
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed. Please install it to use this dApp.");
      }
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        throw new Error("No accounts found. Please make sure MetaMask is unlocked.");
      }
      const contract = new web3.eth.Contract(
        FeedBackManagement.abi,
        FeedBackManagement.contractAddress
      );

      await contract.methods.setContactForm(name,email,message).send({from: accounts[0], gas: 3000000});

      setName("");
      setEmail("");
      setMessage("");

      Swal.fire({
        title: "Success",
        text: `Thanks for Contacting Us. Our Team would shortly contact you.`,
        icon: "success"
      })
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `Something went wrong`,
        icon: "error"
      })
    }
    
    console.log(e);

  }

  return(
    <div className="main-contact">
    <h1 className="mt-2 text-bold">Contact Us</h1>
    <div className="form-main">
      <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name..." required/>

          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required/>

          <label htmlFor="message">Message</label>
          <textarea value={message} onChange={handleMessageChange} placeholder="Enter your message" required/>

          <button type="submit" className="btn btn-primary mt-2">Send</button>
      </form>
    </div>
  </div>
  )
};

export default ContactUs;