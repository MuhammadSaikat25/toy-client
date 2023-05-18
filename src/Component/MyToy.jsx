import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [myToy, setMyToy] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myToy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [user])

    return (
        <div>
            <div className="overflow-x-auto">
                {
                    user?<table className="table w-full">
                    {/* head */}
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
                        myToy.map(toy => <tbody key={toy._id}>
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

                </table>:''
                }
            </div>
        </div>
    );
};

export default MyToy;
