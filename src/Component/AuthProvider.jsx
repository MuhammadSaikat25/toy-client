import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../firebase';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const auth = getAuth(app)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {

       const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
       })
       return ()=>{
        unsubscribe()
       }

    }, [])
    console.log(user)
    const authInfo = {
        createUser, logIn,user
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