import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-main">
       <p className='footer-content'>
         Made with <FavoriteIcon style={{fill: "red"}}/> Using Blockchain.
       </p>
    </div>
  )
}

export default Footer