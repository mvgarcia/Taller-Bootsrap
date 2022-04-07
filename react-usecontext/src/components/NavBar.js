import { ThemeContext } from '../hooks/ThemeProvider';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SwitchButton from '../hooks/Switch';

export const NavBar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${darkMode ? "navbar-dark bg-dark" : ""}`}>
      <a className='navbar-brand' href='#main'>
        ISIS3710
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav display-flex align-items-center'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/gallery'>
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact-form'>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <SwitchButton />
          </li>
          <li className='nav-item ms-2'>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </li>
        </ul>
      </div>
    </nav>
  );
};
