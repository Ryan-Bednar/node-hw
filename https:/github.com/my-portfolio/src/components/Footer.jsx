import "../styles/Footer.css";
import img2 from '../assets/images/github.jpeg';
import img3 from '../assets/images/linkedin.jpeg';
import img4 from '../assets/images/email.jpeg';
import React, { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';

export default function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <footer>
      <div>
        <p>Created by Ryan Bednar<br />2025</p>
        <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
      </div>
      <div className='links'>
        <a href="https://github.com/Ryan-Bednar">
          <img src={img2} alt="github link" />
        </a>
        <a href="https://www.linkedin.com/in/ryanebednar/">
          <img src={img3} alt="LinkedIn link" />
        </a>
        <a href="mailto:rbednar01@gmail.com">
          <img src={img4} alt="Email link" />
        </a>
      </div>
    </footer>
  );
}