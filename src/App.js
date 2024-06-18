<<<<<<< HEAD
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SubmitFeedback from "./components/SubmitFeedback";
import ViewFeedback from "./components/ViewFeedback";
import Reports from "./components/Reports";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit-feedback" element={<SubmitFeedback />} />
          <Route path="/view-feedback" element={<ViewFeedback />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
=======
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
>>>>>>> cac62e6eb0e168f933b45a4227781764442d3eda
  );
}

export default App;
