import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const data = useLoaderData()
    console.log(data)

    const handelUp = (e) => {
        e.preventDefault()
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        const detail = e.target.detail.value
        const newUpdate = { price, quantity, detail }
        // console.log(price, quantity, detail)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/update/${data._id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUpdate)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount>0) {
                            alert("Update successful")
                        }
                    })
            }
        })
    }
    return (
        <div>
            <form className='text-center w-1/2 mx-auto bg-purple-300 p-4 rounded' onSubmit={handelUp}>
                <input className='border w-full' type="text" name="price" defaultValue={data.price} placeholder='Price' /><br /> <br />
                <input className='border w-full' type="text" name="quantity" defaultValue={data.Available} placeholder='Available quantity' /><br /><br />
                <input className='border w-full' type="text" name="detail" defaultValue={data.details} placeholder='Detail description' /><br /><br />
                <button className='bg-emerald-700 text-white font-bold w-full'>Update</button>
            </form>
        </div>
    );
};

export default Update;