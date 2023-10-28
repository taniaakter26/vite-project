import React from 'react';
import './About.css';

const About = (props) => {
    return (
        <div>
            <ul className='anav'>
                <li>Name: {props.more['name']}</li>
                <li>City: {props.more['city']}</li>
                <li>Occupation: {props.more['occupation']}</li>
            </ul>
        </div>
    );
};

export default About;