import React from 'react';
import './style.css';

type types = {
  Title: string;
};

const Navbar = (props: types): React.ReactElement => {
  return (
    <>
      <nav className="navbar">
        <h1>{props.Title}</h1>
        <div className='nav-links'>
        <a href="#menu">Menu</a>
        <a href="#footer">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
