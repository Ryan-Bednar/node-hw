import React from "react";
import "../styles/Resume.css";

export default function Resume() {

    return (
        <div className='resume'>
            <h2>Resume</h2>
            <div className='resume-content'>
                <h3>Education</h3>
                <p>Kansas State University
                    <ul>
                        <li>Bachelor of Science: Communication Studies</li>
                        <li>Certificate: Professional Strategic Selling</li>
                    </ul>
                </p>
                <p>University of Kansas
                    <ul>
                        <li>Certication in Web Development (Graduating in March 2025)</li>
                    </ul>
                </p>
                <h3>Experience</h3>
                <div className='experience'>
                    <h4>Ferguson - Sales Support Representative</h4>
                    <p>Hybrid&nbsp;&nbsp;&nbsp;September 2022 - Present</p>
                    <ul>
                        <li>Receive and respond to 20-40 inbound calls per day regarding customer service requests, product inquiries, and sales questions</li>
                        <li>Organize information relating to warranty claims and send to manufacturers for processing</li>
                        <li>Compile portfolios and advise customers in making selections based on budget, design, and availability</li>
                        <li>Cross-sell products and services to maximize profit for the company</li>
                        <li>Coordinate scheduling for appliance and plumbing deliveries for builders and homeowners</li>
                        <li>Manage time efficiently to serve each customer’s needs fully while providing an exceptional experience</li>
                        <li>Achieved over $140,000 in sales in the first half of the fiscal year alone surpassing manager expectations</li>
                    </ul>
                    <h4>Ferguson - Summer Sales Intern</h4>
                    <p>Lenexa, KS&nbsp;&nbsp;&nbsp;June 2022</p>
                    <ul>
                        <li>Engaged with customers and asked questions to better serve customer needs</li>
                        <li>Gained knowledge of how the business is conducted throughout the Kansas City metro area</li>
                        <li>Shadowed salespeople in varying positions to better understand roles within the company</li>
                        <li>Improved unwired associate communication by utilizing Screen Cloud, a third-party application</li>
                    </ul>
                    <h4>Camp Tekakwitha - Camp Counselor</h4>
                    <p>Williamsburg, KS&nbsp;&nbsp;&nbsp;07/2020 - 07/2020, 06/2021 – 07/2021</p>
                    <ul>
                        <li>Ensured that campers had an enjoyable experience while also maintaining social distance guidelines to keep campers safe</li>
                        <li>Made certain campers were where they needed to be on time to maximize camp experience</li>
                        <li>Quickly adapted to changing conditions at camp including changing weather, new information about the pandemic, and camper emergencies</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

