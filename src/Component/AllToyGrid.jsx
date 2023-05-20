import React from 'react';

const AllToyGrid = ({ toy }) => {
    return (
        <div className=' border space-y-3 text-center rounded hover:bg-orange-300 mb-10 font-bold'>

            <img className='w-[300px] h-[300px] mx-auto' src={toy.url} alt="" />
            <p>price: ${toy.price}</p>
            <p>Available Quantity:{toy.Available}</p>
            <p>Description:{toy.details}</p>
            <div className="inline-flex justify-between w-full">
                <p className='text-white bg-purple-800  font-bold p-2 rounded'><button>Delete</button></p>
                <p className='bg-green-600 font-bold p-2 rounded text-white'><button>Update</button></p>
            </div>
        </div>
    );
};

export default AllToyGrid;