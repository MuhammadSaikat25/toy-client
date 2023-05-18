import React, { createContext } from 'react';
export const AuthContext=createContext()
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';


const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    const createUser=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        createUser,logIn
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