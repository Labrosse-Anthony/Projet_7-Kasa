import React from 'react';
import logoWhite from '../assets/images/logo-white.svg'
import '../assets/style/footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      <img src= {logoWhite} alt="logo kasa blanc"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;