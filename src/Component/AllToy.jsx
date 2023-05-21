import React, { useEffect, useState } from 'react';
import AllToyGrid from './AllToyGrid';
import useTitle from '../useTitle';
import { Link } from 'react-router-dom';

const AllToy = () => {
    const [allToy, setAllToy] = useState([])
    const [search, setSearch] = useState('')
    useTitle('all-toy')
    useEffect(() => {
        fetch(`https://toy-hub-brown.vercel.app/allToy`)
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])


    return (
        <div>


            <input className='border w-1/2  mx-auto rounded mb-10' placeholder='Search by lowerCase' type="text" onChange={(e) => setSearch(e.target.value)} />
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>img</th>
                        <th>Seller</th>
                        <th>Price</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Description</th>
                        <th>View Detail</th>
                    </tr>
                </thead>
                {
                    allToy.filter(a => a.toyName.toLowerCase().includes(search)).map((toy, i) => <tbody key={toy._id}>
                        <tr>
                            <th>{i + 1}</th>
                            <th><img className='w-[100px] rounded' src={toy.url} alt="" /></th>
                            <td><p>{toy.name}</p></td>
                            <td><p>${toy.price}</p></td>
                            <td>{toy.toyName}</td>
                            <td><p> {toy.age}</p></td>
                            <td> <p>{toy.details}</p></td>
                            <td><Link to={`/subDetails/${toy._id}`}><button className='bg-sky-700 w-full rounded text-white font-bold'>viewDetail</button></Link></td>
                        </tr>
                    </tbody>)
                }

            </table>
        </div>
    );
};

export default AllToy;