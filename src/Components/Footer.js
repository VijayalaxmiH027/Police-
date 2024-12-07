import React from 'react';

const Footer = () => {
    const footerStyles = {
        backgroundColor: '#0B2F9F', // Same blue as the header
        color: 'white', // Contrasting text color
        textAlign: 'center', // Center the content
        padding: '10px 20px', // Add some padding
        width: '100%', // Full width
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow
        marginTop: 'auto', // Push footer to the bottom if there's enough content
    };

    return (
        <footer style={footerStyles}>
            <div>
                <p>&copy; 2024 StayEaze. All Rights Reserved.</p>
                <div style={{ marginTop: '5px' }}>
                    <a href="/privacy" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>
                        Privacy Policy
                    </a>
                    <a href="/terms" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>
                        Terms of Use
                    </a>
                    <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
