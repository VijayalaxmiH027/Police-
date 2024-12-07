import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/styles.css'; // Import external CSS for styles

const Header = () => {
    const location = useLocation();

    return (
        <header className="dashboard-header">
            {/* Show "Suspects" text only on the "/suspects" page */}
            {location.pathname === '/suspects' && (
                <div className="header-left">
                    Suspects
                </div>
            )}

            {/* Right Section: Navigation */}
            <div className="header-right">
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li><Link to="/Dashboard">Home</Link></li>
                        <li><Link to="/checkin">CheckIn</Link></li>
                        <li><Link to="/user">User</Link></li>
                        <li><Link to="/accommodations">Accommodations</Link></li>
                        <li><Link to="/suspects">Suspects</Link></li>
                        <li><Link to="/Notifications">Notifications</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        
                        {/* Show the search bar only on the "/dashboard" page */}
                        {location.pathname === '/dashboard' && (
                            <li>
                                <div className="header-search-container">
                                    <input
                                        type="text"
                                        className="header-search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </div>
                            </li>
                        )}

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
