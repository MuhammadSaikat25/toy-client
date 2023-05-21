import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile,signOut,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import app from '../firebase';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loader,setLoader]=useState(true)
    const auth = getAuth(app)
    const provider=new GoogleAuthProvider()
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const google=()=>{
      return  signInWithPopup(auth,provider)
    }
    const logIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const upDateUser = (name,url) => {
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:url
        })
    }
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])
    console.log(user)
    const logOut=()=>{
       return signOut(auth)
    
    }
    const authInfo = {
        createUser, logIn, user, upDateUser,logOut,loader,google
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