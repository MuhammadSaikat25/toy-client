import React, { createContext } from 'react';
export const AuthContext=createContext()
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';


const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    const createUser=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        createUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;