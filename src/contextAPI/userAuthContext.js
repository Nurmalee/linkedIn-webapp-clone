import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../Config/firebase'

const userAuthContext = createContext()

export function useAuth(){
    return useContext(userAuthContext)
}

export function UserAuthProvider({children}) {
    const [currentUser, setCurrrentUser] = useState('')
    const [loading, setLoading] = useState(true)

    const signUp = (email, password, fullName, profilePicUrl) => {
        if(email && fullName && password){
            auth.createUserWithEmailAndPassword(email, password)
            .then(createdUser => {
                createdUser.user.updateProfile({
                    displayName: fullName,
                    photoURL: profilePicUrl
                })
            }).catch((error) => console.log(error.message))
        } else {
            alert('Email, Full Name and Password must be present')
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signUp
    }

    return (
        <userAuthContext.Provider value={value}>
            {!loading && children}
        </userAuthContext.Provider>
    )
}
