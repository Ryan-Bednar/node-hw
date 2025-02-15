import React from 'react';
import '../styles/Header.css';
import { Link, useLocation } from 'react-router-dom';

const styles = {
    linkStyle: {
        padding: '5px', 
        margin: '5px', 
        borderRadius: '25px',
        fontSize: '20px',
    }
}


export default function Header() {
    const currentPage = useLocation.pathname;
    return (
        <header className="header container">
            <h1 style={styles.title}>
                 Ryan Bednar's Portfolio
            </h1>
            <nav>
                <div className='nav-links container'>
                    <Link style={styles.linkStyle}
                        to="/"
                        className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}>                        
                        About Me
                    </Link>
                    <Link style={styles.linkStyle}
                        to="/portfolio"
                        className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </Link>
                    <Link style={styles.linkStyle}  
                        to="/contact"
                        className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </Link>
                    <Link style={styles.linkStyle}  
                        to="/resume"
                        className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </Link>
                </div>
            </nav>
        </header>
    );
}