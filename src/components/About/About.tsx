import React from 'react';
import './style.css';

type Types = {
  description: string;
};

const About = (props: Types): React.ReactElement => {
  let spliced: Array<string> = props.description.split('\n\n');

  return (
    <>
      <section className='about'>
        <h2 className="about-h2">About Us</h2>
        <div className='paragraph-container'>
          {spliced.map((paragraph: any, i: number) => {
            return <p className="about-p">{paragraph}</p>;
          })}
        </div>
      </section>
    </>
  );
};

export default About;
