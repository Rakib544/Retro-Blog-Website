import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

const Navbar = () => {
    const [showDropdown, setShowDropDown] = useState(false)
    const { user, dispatch } = useContext(Context);

    const handleLogOut = () => {
        dispatch({type: 'LOGOUT'})
    }

    return (
        <nav className="md:col-span-1 md:flex md:justify-between fixed w-full">
            <div className="flex justify-between items-center">
                <img src="https://i.ibb.co/pr0J6rk/retrolie.png" className="w-24" alt="logo" />
                <div className="px-4 cursor-pointer md:hidden" onClick={() => setShowDropDown(!showDropdown)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>
            <div className={`mt-6 ${showDropdown ? 'flex flex-col' : 'hidden'} md:block`}>
                <Link to="/" className="mx-4 my-2 uppercase text-xs font-bold">
                    Home
                </Link>
                {user?.isAdmin
                    ? <React.Fragment>
                        <Link to="/addBlog" className="mx-4 my-2 uppercase text-xs font-bold">
                            Write Blog
                        </Link>
                        <Link to="/" className="mx-4 my-2 uppercase text-xs font-bold" onClick={handleLogOut}>
                            Logout
                        </Link>
                        <Link to="/addAdmin" className="mx-4 my-2 uppercase text-xs font-bold">
                            Add Admin
                        </Link>
                        <Link to="/manageBlog" className="mx-4 my-2 uppercase text-xs font-bold">
                            Manage Blog
                        </Link>
                    </React.Fragment>
                    : <Link to="/login" className=" ml-4 my-2 uppercase text-xs font-bold">
                        Log in
                    </Link>
                }
            </div>
        </nav >

    );
};


export default Navbar;