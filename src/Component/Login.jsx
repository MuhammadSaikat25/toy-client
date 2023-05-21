import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import useTitle from '../useTitle';

const Login = () => {
    const {logIn,google}=useContext(AuthContext)
    const [error,setError]=useState('')
    useTitle('login')
    console.log(error)
    const handelLog = e => {
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value 
        logIn(email,password)
            .then(res=>{
                // setError('')
               <Navigate to='/'></Navigate>
              
            })
            .catch(error=>{
            //    setError(error.message)
            })
    }
    const Google=()=>{
        google()
            .then(res=>{})
            .catch(error=>{})
    }
    return (
        <div className='w-full lg:w-[500px] mx-auto text-center mt-20  bg-blue-400 p-10 rounded-md'>
           
            <form  onSubmit={handelLog}>
                <input className='w-full' type="email" name="email" placeholder='Email'required />
                <br /> <br />
                <input className='w-full' type="password" name="password" placeholder='Password' required/>
                <br /> <br />
                <button className='bg-green-400 p-2 rounded w-[150px] text-white font-bold' type='submit'>Log in</button><br /><br />
                <button className='bg-blue-600 p-1 rounded text-white font-semibold' onClick={Google}>login with Google</button>
            <div className="text-center">
                <h1 className='w-1/2 font-bold text-white'>New at Toy-hub ? <span className='underline'><Link to='/register'>Register</Link></span></h1>
            </div>
            </form>
            <h1>{error}</h1>
        </div>
    );
};

export default Login;