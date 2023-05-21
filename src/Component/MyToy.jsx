import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../useTitle';

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [myToy, setMyToy] = useState([])
    useTitle('my-toy')
    useEffect(() => {
        fetch(`https://toy-hub-brown.vercel.app/myToy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [user])

   const sortPrice=(e)=>{
        const value=e.target.value
       
        fetch(`https://toy-hub-brown.vercel.app/getSort/${value}`)
            .then(res=>res.json())
            .then(data=>setMyToy(data))

        console.log(e.target.value)
   }

    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure you will delete?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-hub-brown.vercel.app/delete/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = myToy.filter(toy => toy._id !== id)
                            setMyToy(remaining)
                        }
                    })
            }

        })


    }
    return (
        <div>
            <p className='mb-3 underline text-cyan-700 font-bold'>Sort by price</p>
            <select onChange={sortPrice} name="" id="">
                <option value=''></option>
                <option value='1'>low-price</option>
                <option value="2">High-price</option>
            </select>

            <div className="overflow-x-auto ">
                {
                    user ? <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>img</th>
                                <th>Price</th>
                                <th>Available quantity</th>
                                <th>Detail description</th>
                                <th>Delete</th>
                                <th>Update</th>
                                <th>Sort</th>
                            </tr>
                        </thead>
                        {
                            myToy.map((toy, i) => <tbody key={toy._id}>
                                <tr>
                                    <th>{i + 1}</th>
                                    <th><img className='w-[50px] rounded' src={toy.url} alt="" /></th>
                                    <td>${toy.price}</td>
                                    <td>{toy.Available}</td>
                                    <td>{toy.details}</td>
                                    <td><button className='bg-emerald-500 text-white p-1 rounded font-bold' onClick={() => handelDelete(toy._id)}>Delete</button></td>
                                    <td><Link to={`/update/${toy._id}`}><button className='bg-sky-800 text-white p-1 rounded font-bold'>Update</button></Link></td>
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
