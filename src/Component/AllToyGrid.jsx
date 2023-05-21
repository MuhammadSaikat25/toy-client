import React from 'react';
import { Link } from 'react-router-dom';

const AllToyGrid = ({ toy }) => {
    
    return (
        <div className="">
            <div className=' border space-y-3 text-center rounded hover:bg-orange-300 mb-10 font-bold'>
                <img className='w-[300px] h-[300px] mx-auto' src={toy.url} alt="" />
                <p>seller Name: {toy.name}</p>
                <p>price: ${toy.price}</p>
                <p>Name:{toy.toyName}</p>
                <p>Available Quantity:{toy.Available}</p>
                <p>Sub-category: {toy.age} years lod</p>
                <p>Description:{toy.details}</p>
                <Link to={`/subDetails/${toy._id}`}><button className='bg-sky-700 w-full rounded text-white font-bold'>viewDetail</button></Link>
            </div>
        </div>
    );
};

export default AllToyGrid;