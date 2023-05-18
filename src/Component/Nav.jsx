import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 font-semibold -mt-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/login'>login</NavLink>
                            <NavLink to='/register'>Register</NavLink>
                        </ul>
                    </div>
                    <Link><img className='w-[100px]' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        <div className="">
                            <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/'>Home</NavLink>
                        </div>
                        <div className="">
                            <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/login'>login</NavLink>
                        </div>
                        <div className="">
                            <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/register'>Register</NavLink>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=" bg-amber-500 px-3 py-2 rounded-md font-bold text-white">

                        <NavLink>BLOG</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;