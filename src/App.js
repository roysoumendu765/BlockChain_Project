import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import ContactUs from './components/contactUs/contactUs';
import FeedbackList from './components/FeedbackList/FeedbackList';
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Adminpanel from "./components/Adminpanel/Adminpanel";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="mt-5">
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminpanel" element={<Adminpanel />} />
        <Route path="/listfeedback" element={<FeedbackList value=""/>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
