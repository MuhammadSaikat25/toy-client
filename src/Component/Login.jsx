import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
    const {logIn}=useContext(AuthContext)
    const handelLog = e => {
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value 
        logIn(email,password)
            .then(res=>{
                console.log(res.user)
            })
            .catch(error=>{
                console.log(error)
            })
    }
    return (
        <div className='w-[500px] mx-auto text-center mt-20  bg-blue-400 p-10 rounded-md'>
           
            <form  onSubmit={handelLog}>
                <input className='w-full' type="email" name="email" placeholder='Email' />
                <br /> <br />
                <input className='w-full' type="password" name="password" placeholder='Password' />
                <br /> <br />
                <button className='bg-green-400 p-2 rounded text-white font-bold' type='submit'>Log in</button>
            <div className="text-center">
                <h1 className='w-1/2 font-bold text-white'>New at Toy-hub ? <span className='underline'><Link to='/register'>Register</Link></span></h1>
            </div>
            </form>
        </div>
    );
};

export default Login;