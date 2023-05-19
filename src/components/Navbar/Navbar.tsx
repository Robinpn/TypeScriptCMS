import React from 'react';
import './style.css';

type types = {
  Title: string;
};

const Navbar = (props: types): React.ReactElement => {
  return (
    <>
      <nav className="navbar">
        <a href="">Menu</a>
        <h1>{props.Title}</h1>
        <a href="">Contact</a>
      </nav>
    </>
  );
};

export default Navbar;
