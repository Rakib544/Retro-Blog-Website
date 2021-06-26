import React from 'react';

const Footer = () => {
    return (
        <>
            <footer
                className="grid grid-cols-1 md:grid-cols-5 gap-4 px-8 text-center bg-primary py-12 text-gray-400 uppercase text-xs font-medium"
            >
                <div>
                    <img
                        src="https://retrolie.thememove.com/wp-content/themes/retrolie/assets/images/light-logo@2x.png"
                        className="w-24 block mx-auto" alt="logo"
                    />
                    <p className="my-2 cursor-pointer">Retro Company</p>
                </div>
                <div>
                    <h2 className="text-white text-md font-bold mb-4">Quick Links</h2>
                    <p className="mb-2 cursor-pointer">Weebly Themes</p>
                    <p className="mb-2 cursor-pointer">Pre-sales Faqs</p>
                    <p className="mb-2 cursor-pointer">Submit a ticket</p>
                </div>
                <div>
                    <h2 className="text-white text-md font-bold mb-4">Services</h2>
                    <p className="mb-2 cursor-pointer">Services</p>
                    <p className="mb-2 cursor-pointer">Theme Week</p>
                </div>
                <div>
                    <h2 className="text-white text-md font-bold mb-4">Support</h2>
                    <p className="mb-2 cursor-pointer">ShowCase</p>
                    <p className="mb-2 cursor-pointer">Widgekit</p>
                    <p className="mb-2 cursor-pointer">support</p>
                </div>
                <div>
                    <h2 className="text-white text-md font-bold mb-4">Contact Us</h2>
                    <p className="mb-2 cursor-pointer">Gazipur, Dhaka, Bangladesh</p>
                    <p className="mb-2 cursor-pointer">dev.rakib01@gmail.com</p>
                    <p className="mb-2 cursor-pointer">01786542643</p>
                </div>
            </footer>
            <div className="py-8 bg-secondary text-center text-gray-300 text-xs tracking-wider">
                &copy;Copyright by Md Rakib
            </div>
        </>
    );
};

export default Footer;