import React from 'react';
import './style.css';

type types = {
  Title: string;
};

const Navbar = (props: types): React.ReactElement => {
  return (
    <>
      <nav className="navbar">
        <a href="#menu">Menu</a>
        <h1>{props.Title}</h1>
        <a href="#footer">Contact</a>
      </nav>
    </>
  );
};

export default Navbar;
