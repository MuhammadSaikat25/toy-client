import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import header1 from '../assets/Math-header.jpg'
import header3 from '../assets/math-2.jpg'
import gallery1 from '../assets/math-toys.webp'
import gallery2 from '../assets/math-3.jpg'
import gallery3 from '../assets/Math-Game.webp'
import gallery4 from '../assets/set-math.jpg'
import gallery5 from '../assets/math.jpg'
import gallery6 from '../assets/Header-1.jpg'
import { AuthContext } from './AuthProvider';
import Footer from './Footer';

const HomeView = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleOut = () => {
        logOut()
            .then(res => { })
            .catch(res => { })
    }
    const [category, setCategory] = useState([])
    const handel3t04 = (ageRange) => {
        fetch(`http://localhost:5000/getToy/${ageRange}`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }
    const handelDetails = () => {
        if (!user) {
            return alert('You have to log in first to view details')
        }
    }
    return (
        <div className=''>
            {/* ============================Nav Section=========================== */}
            <div className="font-bold">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li> <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/'>Home</NavLink></li>
                                <li> <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/allToy'>All-Toy</NavLink></li>

                                <li tabIndex={0}>

                                    {
                                        user ? <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/addToy'>ADD-TOY</NavLink> : ''
                                    }
                                    <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/login'>login</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/register'>Register</NavLink>
                                    {
                                        user ? <NavLink to='/myAdd'>My-Toy</NavLink> : ''
                                    }
                                    {
                                        user ? <div className='inline-flex items-center'>
                                            <img title={user.displayName} className='rounded-3xl w-[40px]' src={user.photoURL} alt="" />
                                            <button onClick={handleOut}>Log out</button>
                                        </div> : ''
                                    }


                                </li>
                            </ul>
                        </div>
                        <Link to='/'><img className='w-[80px]' src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li> <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/'>Home</NavLink></li>
                            <li> <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/allToy'>All-Toy</NavLink></li>
                            <li tabIndex={0}>

                                {
                                    user ? <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/addToy'>ADD-TOY</NavLink> : ''
                                }
                                <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/login'>login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "text-lime-500" : ''} to='/register'>Register</NavLink>
                                {
                                    user ? <NavLink to='/myAdd'>My-Toy</NavLink> : ''
                                }
                                {
                                    user ? <div className='inline-flex items-center'>
                                        <img title={user.displayName} className='rounded-3xl w-[40px]' src={user.photoURL} alt="" />
                                        <button onClick={handleOut}>Log out</button>
                                    </div> : ''
                                }


                            </li>

                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Blog</a>
                    </div>
                </div>
            </div>

            {/* ================================Carousel Section====================== */}
            <div>
                <div className="carousel w-full h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={header1} className="object-cover w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={header3} className="w-full object-cover" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* =====================Gallery Section================= */}
            <h1 className='text-center font-bold text-2xl mt-10'>Photo Gallery</h1>
            <div className="mt-10 grid lg:grid-cols-3 max-w-7xl mx-auto w-full gap-5 ">
                <img className='w-[500px] h-[400px] rounded shadow-xl' src={gallery1} alt="" />
                <img className='w-[500px] h-[400px] rounded shadow-xl' src={gallery2} alt="" />
                <img className='w-[500px] h-[400px] rounded shadow-xl' src={gallery3} alt="" />
                <img className='w-[500px] h-[400px] rounded shadow-xl' src={gallery4} alt="" />
                <img className='w-[500px] h-[400px] rounded shadow-xl' src={gallery5} alt="" />
                <img className='w-[500px] h-[400px] rounded shadow-xl' src={gallery6} alt="" />
            </div>

            {/* ===========================Subcategory================================ */}
            <div className="text-center mt-20 font-bold">
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handel3t04(4)}>3-4 years children</Tab>
                        <Tab onClick={() => handel3t04(7)}>5-7 years children</Tab>
                        <Tab onClick={() => handel3t04(9)}>8-10+ years children</Tab>

                    </TabList>

                    <TabPanel >
                        {
                            category.map(toy => <div className='border w-[300px] mx-auto mb-3 '>
                                <img className='w-[300px]' src={toy.url} alt="" />
                                <p className='text-gray-500'>{toy.toyName}</p>
                                <p>${toy.price}</p>
                                <p className='text-yellow-500'>rating:{toy.rating}</p>
                                <Link to={`/subDetails/${toy._id}`}><button onClick={handelDetails} className='w-full bg-slate-700 text-white p-2 '>View Details</button></Link>
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            category.map(toy => <div className='border w-[300px] mx-auto mb-3 '>
                                <img className='w-[300px]' src={toy.url} alt="" />
                                <p className='text-gray-500'>{toy.toyName}</p>
                                <p>${toy.price}</p>
                                <p className='text-yellow-500'>rating:{toy.rating}</p>
                                <Link to={`/subDetails/${toy._id}`}> <button onClick={handelDetails} className='w-full bg-slate-700 text-white p-2 '>View Details</button></Link>
                            </div>)
                        }

                    </TabPanel>
                    <TabPanel>
                        {
                            category.map(toy => <div className='border w-[300px] mx-auto mb-3 '>
                                <img className='w-[300px]' src={toy.url} alt="" />
                                <p className='text-gray-500'>{toy.toyName}</p>
                                <p>${toy.price}</p>
                                <p className='text-yellow-500'>rating:{toy.rating}</p>
                                <Link to={`/subDetails/${toy._id}`}> <button onClick={handelDetails} className='w-full bg-slate-700 text-white p-2 '>View Details</button></Link>
                            </div>)
                        }

                    </TabPanel>
                </Tabs>
            </div>

            {/* ======================== Top selling Section================= */}
            <h1 className='text-center mt-20 mb-10 text-gray-400 font-bold text-2xl'>Top selling Toys in this week</h1>
            <div className="grid gap-5 lg:grid-cols-3 ">
                <div className="border w-[350px] rounded-md shadow-2xl">
                    <img className=' rounded-md ' src={gallery5} alt="" />
                    <p className='text-xl font-bold text-gray-400 text-center mt-3'>price: $23</p>
                    <button className='bg-orange-400 text-white font-bold mt-3 w-full rounded'>ADD TO CART</button>
                </div>
                <div className="border w-[350px] rounded-md shadow-2xl">
                    <img className=' rounded-md ' src={gallery2} alt="" />
                    <p className='text-xl font-bold text-gray-400 text-center mt-3'>price: $27</p>
                    <button className='bg-orange-400 text-white font-bold mt-3 w-full rounded'>ADD TO CART</button>
                </div>
                <div className="border w-[350px] shadow-2xl">
                    <img className=' rounded-md ' src={gallery3} alt="" />
                    <p className='text-xl font-bold text-gray-400 text-center mt-3'>price: $43</p>
                    <button className='bg-orange-400 text-white font-bold mt-3 w-full rounded'>ADD TO CART</button>
                </div>
            </div>

            {/* ================================ Another Extra Section================================== */}
            <div className="text-center mt-10 space-y-4 ">
                <h1 className='font-bold text-gray-700'>Sign up for our newsletter</h1>
                <p className='font-bold text-gray-700'>Sign up today for our newsletter and receive <span className='text-red-600'>15% OFF</span>your first purchase, and also get our sneak peeks, tips, and exclusive offers.</p>
                <input className='border w-[400px]' type="email" name="email" placeholder='Enter your Email*' /><br />
                <button className='text-center bg-green-400 font-bold text-white  p-2 rounded'>SUBSCRIBE</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeView;