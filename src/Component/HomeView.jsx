import React from 'react';
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

const HomeView = () => {
    const handel3t04 = (ageRange) => {
        fetch(`http://localhost:5000/getToy/${ageRange}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className=''>

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
            <div className="text-center mt-20 font-bold">
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handel3t04(4)}>3-4 years children</Tab>
                        <Tab>5-7 years children</Tab>
                        <Tab>7-10+ years children</Tab>
                    </TabList>

                    <TabPanel >
                        <h1>3-4</h1>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h1>7-10</h1>
                    </TabPanel>
                </Tabs>
            </div>
            {/* ======================== Top selling Section================= */}
            <h1 className='text-center mt-20 mb-10 text-gray-400 font-bold text-3xl'>Top selling Toys in this week</h1>
            <div className="grid gap-5 lg:grid-cols-3 ml-3">
                <div className="border w-[350px] p-5">
                    <img className='w-[300px] rounded-md h-[300px]' src={gallery5} alt="" />
                    <p className='text-xl font-bold text-gray-400 text-center mt-3'>price: $23</p>
                    <button className='bg-orange-400 text-white font-bold mt-3 w-full rounded'>ADD TO CART</button>
                </div>
                <div className="border w-[350px] p-5">
                    <img className='w-[300px] rounded-md h-[300px]' src={gallery2} alt="" />
                    <p className='text-xl font-bold text-gray-400 text-center mt-3'>price: $27</p>
                    <button className='bg-orange-400 text-white font-bold mt-3 w-full rounded'>ADD TO CART</button>
                </div>
                <div className="border w-[350px] p-5">
                    <img className='w-[300px] rounded-md h-[300px]' src={gallery3} alt="" />
                    <p className='text-xl font-bold text-gray-400 text-center mt-3'>price: $43</p>
                    <button className='bg-orange-400 text-white font-bold mt-3 w-full rounded'>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default HomeView;