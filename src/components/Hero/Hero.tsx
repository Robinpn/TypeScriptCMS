import * as React from 'react';
import './style.css';

type HeroImage = {
  imgUrl: string;
};

const Hero = (props: HeroImage): React.ReactElement => {
  return (
    <>
      <section className="hero">
        <img className="hero-img" src={props.imgUrl} alt="hero image" />
        <button className="arrow-btn">
          <p>&#8595;</p>
        </button>
      </section>
    </>
  );
};

export default Hero;
