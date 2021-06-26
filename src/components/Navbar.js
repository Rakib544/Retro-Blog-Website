import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../context/Context';

const Navbar = () => {
    const [showDropdown, setShowDropDown] = useState(false)
    const { user, dispatch } = useContext(Context);

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <nav className="md:col-span-1 md:flex md:justify-between fixed w-full px-4 bg-white shadow-sm py-4">
            <div className="flex justify-between items-center">
                <NavLink to="/">
                    <img src="https://i.ibb.co/pr0J6rk/retrolie.png" className="w-24" alt="logo" />
                </NavLink>
                <div className="px-4 cursor-pointer md:hidden" onClick={() => setShowDropDown(!showDropdown)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>
            <div className={`my-2 ${showDropdown ? 'flex flex-col' : 'hidden'} md:block`}>
                <NavLink
                    to="/"
                    exact
                    activeClassName="border-b-2 border-grash"
                    className="mx-4 py-2 uppercase inline-block text-xs font-bold hover:border-b-2 hover:border-grash"
                >
                    Home
                </NavLink>
                {user?.isAdmin
                    ? <React.Fragment>
                        <NavLink
                            to="/addBlog"
                            activeClassName="border-b-2 border-grash"
                            className="mx-4 py-2 uppercase inline-block text-xs font-bold hover:border-b-2 hover:border-grash"
                        >
                            Write Blog
                        </NavLink>
                        <NavLink
                            to="/addAdmin"
                            activeClassName="border-b-2 border-grash"
                            className="mx-4 py-2 uppercase text-xs inline-block font-bold hover:border-b-2 hover:border-grash"
                        >
                            Add Admin
                        </NavLink>
                        <NavLink
                            to="/manageBlog"
                            activeClassName="border-b-2 border-grash"
                            className="mx-4 py-2 uppercase text-xs inline-block font-bold hover:border-b-2 hover:border-grash"
                        >
                            Manage Blog
                        </NavLink>
                        <NavLink
                            to="/"
                            className="mx-4 py-2 uppercase text-xs inline-block font-bold hover:border-b-2 hover:border-grash"
                            onClick={handleLogOut}
                        >
                            Logout
                        </NavLink>
                    </React.Fragment>
                    : user?.username
                        ? <NavLink
                            to="/"
                            activeClassName="border-b-2 border-grash"
                            className="mx-4 py-2 uppercase text-xs inline-block font-bold hover:border-b-2 hover:border-grash"
                            onClick={handleLogOut}
                        >
                            Logout
                        </NavLink>
                        : <NavLink
                            to="/login"
                            className=" ml-4 py-2 uppercase text-xs inline-block font-bold hover:border-b-2 hover:border-grash"
                        >
                            Log in
                        </NavLink>
                }
            </div>
        </nav >

    );
};


export default Navbar;