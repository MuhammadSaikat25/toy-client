import React, { useEffect } from 'react';

const AllToy = () => {
    useEffect(()=>{
        fetch(`http://localhost:5000/allToy`)
            .then(res=>res.json())
            .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AllToy;