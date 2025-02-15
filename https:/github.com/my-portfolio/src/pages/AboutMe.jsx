import React from 'react';
import '../styles/AboutMe.css';

import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/github.jpeg';
import img3 from '../assets/images/linkedin.jpeg';
import img4 from '../assets/images/email.jpeg';


export default function AboutMe() {
    return (
        <div className='about-me'>
            <h2>About Me</h2>
            <div className='about-me-content'>
                <div className='about-me-img'>
                        <img src={img1} alt="Ryan Bednar"  />
                    <div className='links'>
                        <a href="https://github.com/Ryan-Bednar" target='_blank' rel='noreferrer'>
                            <img src={img2} alt="github link" />
                        </a>
                        <a href="https://www.linkedin.com/in/ryanebednar/" target='_blank' rel='noreferrer'>
                            <img src={img3} alt="LinkedIn link" />
                        </a>
                        <a href="mailto:rbednar01@gmail.com" target='_blank' rel='noreferrer'>
                            <img src={img4} alt="Email link" />
                        </a>
                    </div>
                </div> 
                <p>
                    Hi, I'm Ryan Bednar. I'm a full stack developer with a passion for creating dynamic and responsive web applications. 
                    I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. 
                    I am currently seeking new opportunities in web development upon the conclusion of coding bootcamp. 
                    The bootcamp is a 6 month program, and has given me opportunities to work on projects with other developers,
                    learn new technologies, and build a portfolio of projects.
                    <br />
                    <br />
                    I have previous experience in customer service and sales, and am excited find new ways to give customers a great experience.
                    I am excited to continue learning and growing as a developer, and am looking forward to the many opportunities that are available in the tech industry.
                    <br />
                    <br />
                    In the Fall of 2023, I married my wife, Allison. We are currently expecting our first child, Eloise, in the Spring of 2025.
                    We are excited to see our family grow, and are looking forward to the many adventures that are ahead of us.
                </p>
            </div>
        </div>
    );
}