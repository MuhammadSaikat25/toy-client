import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    if(loader){
        return <div className='text-center'><button className="btn loading text-center ">loading</button></div>
    }
    if(user){
     return   children
    }
    // <Navigate to='/login'></Navigate>
    return <Navigate to='/login'></Navigate>
};

export default PrivetRout;