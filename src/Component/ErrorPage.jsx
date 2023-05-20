import React from 'react';
import error from '../assets/404_page_cover.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <img src={error} alt="" />
            <Link to='/'><button className='bg-fuchsia-500 p-2 rounded shadow-2xl text-center text-white font-bold'>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;