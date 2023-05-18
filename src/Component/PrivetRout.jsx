import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user}=useContext(AuthContext)
    if(user){
     return   children
    }
    <Navigate to='/login'></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivetRout;