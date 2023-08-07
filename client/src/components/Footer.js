import React from 'react';
import github from '../assets/github-icon.png';
import linkedin from '../assets/linkedin.png';
import medium from '../assets/medium-icon.svg';
function Footer() {
    return (
        <ul className="footer">
          <a href="https://github.com/osuchaya"><img src={github} width="50px" alt="github icon"></img></a>
        <a href="https://www.linkedin.com/in/suchaya-osatis-0b81a378"><img src={linkedin} width="50px" alt="linkedin icon"></img></a>
        <a href="https://medium.com/@suchaya.osatis"><img src={medium} width="50px" alt="medium blog icon"></img></a>
        </ul>
    )
}
export default Footer;