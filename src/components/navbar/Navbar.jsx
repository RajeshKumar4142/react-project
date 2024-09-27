import { useState } from 'react';
import { RiHomeFill, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/car_logo.png';
import './navbar.css';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar_links'>
        <div className='gpt3_navbar_links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3_navbar_links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#possibility">Service</a></p>
          <p><a href="#features">Blog</a></p>
          <p><a href="#blog">page</a></p>
        </div>
      </div>
      <div className='gpt3_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>  
      <div className='gpt3_navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3_navbar-menu_container scale-up-center">
            <div className="gpt3_navbar-menu_container-links">
              <p><a href="#home">Home <RiHomeFill /></a></p>
              <p><a href="#wgpt3">What is AI ?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3_navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
