import React, { useEffect, useState } from 'react';
import AllToyGrid from './AllToyGrid';

const AllToy = () => {
    const [allToy, setAllToy] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allToy`)
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])
    return (
        <div>


           <div className="grid lg:grid-cols-3 gap-10">
            {
                allToy.map(toy=><AllToyGrid toy={toy} key={toy._id}></AllToyGrid>)
            }
           </div>
        </div>
    );
};

export default AllToy;