import React from 'react';

const Footer = () => {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-5 gap-4 px-8 text-center bg-gray-800 py-12 text-white">
            <div>
                <h1>Logo</h1>
                <p>Retro Company</p>
            </div>
            <div>
                <p>Weebly Themes</p>
                <p>Pre-sales Faqs</p>
                <p>Submit a ticket</p>
            </div>
            <div>
                <p>Services</p>
                <p>Theme Week</p>
            </div>
            <div>
                <p>ShowCase</p>
                <p>Widgekit</p>
                <p>support</p>
            </div>
            <div>
                <p>About us</p>
                <p>Contact Us</p>
                <p>Affiliates</p>
                <p>recourses</p>
            </div>
        </footer>
    );
};

export default Footer;