import React from 'react';
import './style.css';

type Types = {
  description: string;
};

const About = (props: Types): React.ReactElement => {
  return (
    <>
      <section>
        <h2>About Us</h2>
        <p>{props.description}</p>
      </section>
    </>
  );
};

export default About;
