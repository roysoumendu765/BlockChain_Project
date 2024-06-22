import React, { useState } from "react";
import './contactUs.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(e);

  }

  return(
    <div className="main-contact">
    <h1 className="mt-2">Contact Us</h1>
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