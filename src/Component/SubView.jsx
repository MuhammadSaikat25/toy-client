import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../useTitle';

const SubView = () => {
    const toy =useLoaderData()
    useTitle('detail')
//    console.log(toy)
    return (
        <div className='border w-1/2 mx-auto text-center space-y-3 font-bold text-gray-700 p-2 rounded-md shadow-2xl bg-sky-300'>
            <img className='w-[300px] shadow-2xl rounded-md mx-auto' src={toy.url} alt="" />
            <h1>Toy Name: {toy.toyName}</h1>
            <h1>Seller Name: {toy.name}</h1>
            <h1>seller email: {toy.email}</h1>
            <h1>Price: ${toy.price}</h1>
            <h1>rating: {toy.rating}</h1>
            <h1>Available quantity: {toy.quantity}</h1>
            <h1>description: {toy.details}</h1>
        </div>
    );
};

export default SubView;