import React from 'react';
import './style.css';

type types = {
  Title: string;
};

const Navbar = (props: types): React.ReactElement => {
  return (
    <>
      <nav className='navbar'>
        <h2>Menu</h2>
        <h1>{props.Title}</h1>
        <h2>Contact</h2>
      </nav>
    </>
  );
};

export default Navbar;
