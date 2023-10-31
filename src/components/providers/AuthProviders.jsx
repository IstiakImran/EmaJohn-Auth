import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContex = createContext(null)
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const signout = () => {
        return signOut(auth)
    }
    const authInfo = {
        user, setUser, createUser, signout
    };
    return (
        <AuthContex.Provider value={authInfo}>
            {children}

        </AuthContex.Provider>
    );
};

export default AuthProviders;