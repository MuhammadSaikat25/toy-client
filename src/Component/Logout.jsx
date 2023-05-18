import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Logout = () => {
    const {logOut}=useContext(AuthContext)
    const handelOut=()=>{
        logOut()
            .then(res=>{})
            .catch(res=>{})
    }
    return (
        <div>
            <button onClick={handelOut}>log Out</button>
        </div>
    );
};

export default Logout;