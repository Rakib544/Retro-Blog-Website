import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showDropdown, setShowDropDown] = useState(false)

    return (
        <nav className="md:col-span-1 md:flex md:justify-between">
            <div className="flex justify-between items-center">
                <img src="https://i.ibb.co/pr0J6rk/retrolie.png" className="w-24" alt="logo" />
                <div className="px-4 cursor-pointer md:hidden" onClick={() => setShowDropDown(!showDropdown)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>
            <div className={`mt-6 ${showDropdown ? 'flex flex-col' : 'hidden'} md:block`}>
                <Link to="/" className="mr-4 my-2">
                    Home
                </Link>
                <Link to="/" className="mr-4 my-2">
                    Write Blog
                </Link>
                <Link to="/" className="mr-4 my-2">
                    Logout
                </Link>
                <Link to="/login" className="mr-4 my-2">
                    Log in
                </Link>
                <Link to="/" className="mr-4 my-2">
                    Manage Blog
                </Link>
            </div>
        </nav>

    );
};


export default Navbar;