import React, { useContext, useEffect, useState } from 'react';
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
import "aos/dist/aos.css";
import AOS from "aos";

const HomeView = () => {
    const { user} = useContext(AuthContext)

 
    const [category, setCategory] = useState([])
    const handel3t04 = (ageRange) => {
        fetch(`https://toy-hub-brown.vercel.app/getToy/${ageRange}`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }
    const handelDetails = () => {
        if (!user) {
            return alert('You have to log in first to view details')
        }
    }
    useEffect(() => {
        AOS.init(); // Initialize AOS library
      }, []);
    return (
        <div className=''>
           
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
            <div className="grid gap-5 lg:grid-cols-3 max-w-7xl mx-auto ">
                <div data-aos="zoom-in" className="border w-[350px] rounded-md shadow-2xl">
                    <img className=' rounded-md ' src={gallery5} alt="" />
                    <p className='text-xl font-bold text-gray-400 text-center mt-3'>price: $23</p>
                    <button className='bg-orange-400 text-white font-bold mt-3 w-full rounded'>ADD TO CART</button>
                </div>
                <div  data-aos="zoom-in" className="border w-[350px] rounded-md shadow-2xl">
                    <img className=' rounded-md ' src={gallery2} alt="" />
                    <p className='text-xl font-bold text-gray-400 text-center mt-3'>price: $27</p>
                    <button className='bg-orange-400 text-white font-bold mt-3 w-full rounded'>ADD TO CART</button>
                </div>
                <div  data-aos="zoom-in" className="border w-[350px] shadow-2xl">
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