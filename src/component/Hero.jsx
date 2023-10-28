import React from "react";
import './Hero.css';

const Hero = (props) => {
    return (
        <div className="hero">
            <h1>{props.title}</h1>
            <h3>{props.des}</h3>
        </div>
    );
};

export default Hero;