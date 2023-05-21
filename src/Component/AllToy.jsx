import React, { useEffect, useState } from 'react';
import AllToyGrid from './AllToyGrid';
import useTitle from '../useTitle';

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

            <input className='border w-1/2  mx-auto rounded mb-10'placeholder='Search by lowerCase' type="text" onChange={(e) => setSearch(e.target.value)} />
            <div className="grid lg:grid-cols-3 gap-10">
                {
                    allToy.filter(a => a.toyName.toLowerCase().includes(search)).map(toy => <AllToyGrid toy={toy} key={toy._id}></AllToyGrid>)
                }
            </div>
        </div>
    );
};

export default AllToy;