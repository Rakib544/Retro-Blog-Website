import React from 'react';

const Footer = () => {
    return (
        <>
            <footer 
                className="grid grid-cols-1 md:grid-cols-5 gap-4 px-8 text-center bg-primary py-12 text-gray-400 uppercase text-xs font-medium"
            >
                <div>
                    <h1 className="mb-2 cursor-pointer">Logo</h1>
                    <p className="mb-2 cursor-pointer">Retro Company</p>
                </div>
                <div>
                    <p className="mb-2 cursor-pointer">Weebly Themes</p>
                    <p className="mb-2 cursor-pointer">Pre-sales Faqs</p>
                    <p className="mb-2 cursor-pointer">Submit a ticket</p>
                </div>
                <div>
                    <p className="mb-2 cursor-pointer">Services</p>
                    <p className="mb-2 cursor-pointer">Theme Week</p>
                </div>
                <div>
                    <p className="mb-2 cursor-pointer">ShowCase</p>
                    <p className="mb-2 cursor-pointer">Widgekit</p>
                    <p className="mb-2 cursor-pointer">support</p>
                </div>
                <div>
                    <p className="mb-2 cursor-pointer">About us</p>
                    <p className="mb-2 cursor-pointer">Contact Us</p>
                    <p className="mb-2 cursor-pointer">Affiliates</p>
                    <p className="mb-2 cursor-pointer">recourses</p>
                </div>
            </footer>
            <div className="py-8 bg-secondary text-center text-gray-300 text-xs tracking-wider">
                &copy;Copyright by Md Rakib
            </div>
        </>
    );
};

export default Footer;