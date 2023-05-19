import * as React from 'react';
import './style.css';

type HeroImage = {
    imgUrl: string;
}

const Hero = (props: HeroImage): React.ReactElement => {
    return (
        <img src={props.imgUrl} alt="hero image" />
    )
}

export default Hero;