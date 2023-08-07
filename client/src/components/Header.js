import React from 'react';
import reacticon from '../assets/react-icon.png';
function Header() {
    return (
        <ul className="header">
            <img width="100px" src={reacticon} alt="react icon"></img><h1>This portfolio is built with React</h1>
        </ul>
    )
}
export default Header;