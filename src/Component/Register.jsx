import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Register = () => {

    const { createUser ,upDateUser} = useContext(AuthContext)
    const [error, setERror] = useState('')

    const handelReg = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const conPass = e.target.conPass.value
        const url = e.target.url.value
        if (password !== conPass) {
            return alert('wong')
        }
        if(password.length<6){
            return alert('password must be at list 6 character')
        }
        createUser(email, password)
            .then(res => {
               alert('Register successful')
               upDateUser(name,url)
                .then(res=>{})
                .catch(res=>{})
            })
            .catch(error => {
                
            })
      
    }
    return (
        <div>
            <div className='w-[500px] mx-auto text-center mt-20  bg-blue-500 p-10 rounded-md'>

                <form onSubmit={handelReg}>
                    <input className='w-full' type="text" name="name" placeholder='Name' />
                    <br /> <br />
                    <input className='w-full' type="email" name="email" placeholder='Email' />
                    <br /> <br />
                    <input className='w-full' type="password" name="password" placeholder='Password' />
                    <br /> <br />
                    <input className='w-full' type="password" name="conPass" placeholder='Conform Password' />
                    <br /> <br />
                    <input className='w-full' type="text" name="url" placeholder='Photo Url' />
                    <br /> <br />
                    <button className='bg-green-400 p-2 rounded w-1/2 text-white font-bold' type='submit'>Register</button>
                    <div className="">
                        <h1 className='font-bold text-white'>Already have an account ? <span className='underline'><Link to='/login'>Log in</Link></span></h1>
                    </div>
                </form>
            </div>
            <h1>{error}</h1>
        </div>
    );
};

export default Register;