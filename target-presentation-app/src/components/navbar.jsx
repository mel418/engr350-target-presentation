import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    // State to manage the visibility of the collapse element
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Function to toggle the collapse state
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom: '40px'}}>
            <Link className="navbar-brand" to="/"><img src='Target_Corporation-Logo.wine.svg' alt="Target Corporation Logo" style={{height: '-webkit-fill-available'}}/></Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                onClick={toggleCollapse} // Call the toggleCollapse function on click
                aria-expanded={!isCollapsed ? 'true' : 'false'} // Set aria-expanded based on collapse state
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/overview">Overview</Link>
                    <Link className="nav-item nav-link" to="/ethical-considerations">Ethical Considerations</Link>
                    <Link className="nav-item nav-link" to="/target-response">Target's Response</Link>
                    <Link className="nav-item nav-link" to="/conclusion">Conclusion</Link>
                </div>
            </div>
        </nav>
    );
};
