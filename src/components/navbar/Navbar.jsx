import React from 'react'
import './navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/images/logo.png'

const Navbar = () => {
  return (

    <>
      <nav className='containerNav'>
        <Link to='/home'>
          <div className='containerLogo'>
            <img src={Logo} alt="Logo" className='logo'/>
            <span>Soundwave</span>
          </div>
        </Link>

        <div className='linkViews'>
          <Link to='/discover'>Discover</Link>
          <Link to='/join'>Join</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar