import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <nav className='navbar navbar-light bg-light'>
      <span className='navbar-brand'>
        <img src={Logo} className='d-inline-block align-center' alt='' />
        Henry - Weather App
      </span>
      <SearchBar onSearch={ onSearch } />
    </nav>
  );
};

export default Nav;
