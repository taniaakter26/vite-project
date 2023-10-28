import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div >
             <ul className='nav'>
                <li>Home</li>
                <li>Hero</li>
                <li>About</li>
                <li>Project</li>
                <li>Service</li>
            </ul>
        </div>
    );
};

export default Header;