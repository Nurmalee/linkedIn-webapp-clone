import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../Config/firebase'

const userAuthContext = createContext()

export function useAuth(){
    return useContext(userAuthContext)
}

export function UserAuthProvider({children}) {
    const [currentUser, setCurrrentUser] = useState('')

    const signUp = (email, password, fullName, profilePicUrl) => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(userAuth => {
            userAuth.user.updateProfile({
                displayName: fullName,
                photoURL: profilePicUrl
            })
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setCurrrentUser(user))
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signUp
    }

    return (
        <userAuthContext.Provider value={value}>
            {children}
        </userAuthContext.Provider>
    )
}
