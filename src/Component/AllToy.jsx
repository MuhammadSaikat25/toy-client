import React, { useEffect, useState } from 'react';

const AllToy = () => {
    const [allToy, setAllToy] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allToy`)
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])
    return (
        <div>

            <thead>
                <tr>
                    <th></th>
                    <th>Price</th>
                    <th>Available quantity</th>
                    <th>Detail description</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
            </thead>
            {
                allToy.slice(0, 20).map(toy => <tbody key={toy._id}>
                    <tr>
                        <th>1</th>
                        <td>${toy.price}</td>
                        <td>{toy.Available}</td>
                        <td>{toy.details}</td>
                        <td><button>Delete</button></td>
                        <td><button>Update</button></td>
                    </tr>
                </tbody>)
            }
        </div>
    );
};

export default AllToy;