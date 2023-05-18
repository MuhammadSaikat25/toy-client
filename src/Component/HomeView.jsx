import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import header1 from '../assets/header-1.webp'
import header3 from '../assets/Header-3.webp'
import gallery1 from '../assets/istock.jpg'
import gallery2 from '../assets/superhero-toys.jpg'
import gallery3 from '../assets/Disney.webp'
import gallery4 from '../assets/math-toys.webp'
import gallery5 from '../assets/Header-2.jpg'
import gallery6 from '../assets/Toy_Story_4_new.webp'

const HomeView = () => {
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
            <div className="mt-10 grid lg:grid-cols-2 max-w-7xl mx-auto w-full">
                <img className='w-[500px]' src={gallery1} alt="" />
                <img className='w-[500px]' src={gallery2} alt="" />
                <img className='w-[500px]' src={gallery3} alt="" />
                <img className='w-[500px]' src={gallery4} alt="" />
                <img className='w-[500px]' src={gallery5} alt="" />
                <img className='w-[500px]' src={gallery6} alt="" />
            </div>
        </div>
    );
};

export default HomeView;