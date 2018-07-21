import React from 'react'

import './About.css';

import computer from '../../images/computer.png';


const About = () => (
    <div className="about">
        <div style={{ textAlign: 'center' }}>
            <h1 className="first-text"> We Simplified Business Funding </h1>
        </div>
        <div className="cards">
            <div className="card-wrapper">    
                <div className="card">
                    <img src={computer} className="card-img" alt="" />
                    <div className="card-container">
                        <h2 className="first-text">Fast and Easy Application</h2> 
                        <p>
                            The application is simple and only takes minutes.  
                            Our dedicated funding specialists are standing by to help.
                        </p> 
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <img src={computer} className="card-img" alt="" />
                    <div className="card-container">
                        <h2 className="first-text">Revenue Based Funding</h2> 
                        <p>
                            Once approved, you are eligible to receive up to 1.25x your monthly revenue in just hours.  
                            It's that simple.
                        </p> 
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <img src={computer} className="card-img" alt="" />
                    <div className="card-container">
                        <h2 className="first-text">Grow Your Business</h2> 
                        <p>
                            Use your funds... expand your business, buy new equipment, pay bills, 
                            or any other business use.
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About;