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

    const handelDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const remaining = myToy.filter(toy => toy._id !== id)
                    setMyToy(remaining)
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                {
                    user ? <table className="table w-full">
                       
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
                            myToy.map((toy, i) => <tbody key={toy._id}>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>${toy.price}</td>
                                    <td>{toy.Available}</td>
                                    <td>{toy.details}</td>
                                    <td><button onClick={() => handelDelete(toy._id)}>Delete</button></td>
                                    <td><button>Update</button></td>
                                </tr>
                            </tbody>)
                        }

                    </table> : ''
                }
            </div>
        </div>
    );
};

export default MyToy;
