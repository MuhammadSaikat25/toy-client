import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'

import 'react-tabs/style/react-tabs.css';
import { AuthContext } from './AuthProvider';


const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleOut = () => {
        logOut()
            .then(res => { })
            .catch(res => { })
    }
    return (
        <div>
            <div className="">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">

                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                       <Link to='/'><img className='w-[80px]' src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li> <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/'>Home</NavLink></li>


                            <li tabIndex={0}>

                                {
                                    user ? <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/addToy'>ADD-TOY</NavLink> : ''
                                }
                                <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/login'>login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/register'>Register</NavLink>
                                {
                                    user?<NavLink to='/myAdd'>My-Toy</NavLink>:''
                                }
                                {
                                    user ? <div className='inline-flex items-center'>
                                        <img title={user.displayName} className='rounded-3xl w-[40px]' src={user.photoURL} alt="" />
                                        <button onClick={handleOut}>Log out</button>
                                    </div> : ''
                                }
                                

                            </li>
                            {/* <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Blog</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;