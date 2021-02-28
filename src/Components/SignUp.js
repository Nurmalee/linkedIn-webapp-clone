import React, { useState } from 'react'
import './LoginPage.css'
import linkedIn_Logo from '../app-logo/linkedin-logo-png-1840.png'
import { useAuth } from '../contextAPI/userAuthContext' 

const SignUp = () => {
    const { signUp } = useAuth()
    const [fullName, setFullName] = useState('')
    const [profilePicUrl, setProfilePicUrl] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignUpForm = async (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
            setErrorMessage('Password fields must have matching values')
            return;
        }

        try {
            setErrorMessage('')
            setLoading(true)
            await signUp(email, password, fullName, profilePicUrl)
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        } catch (error) {
            setErrorMessage(error.message);
        }
        setLoading(false)
    }

    return (
        <div className='loginPage'>
            <div className="loginPage__logo">
                <img src={linkedIn_Logo} alt='LinkedIn_Logo'/>
            </div>
            {errorMessage && <p className='signup__error'>{errorMessage}</p> }
            <form onSubmit={handleSignUpForm}>
                <input type="text" placeholder='Full Name' value={fullName} onChange={e => setFullName(e.target.value)} />
                <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="text" placeholder='Profile Pic Url' value={profilePicUrl} onChange={e => setProfilePicUrl(e.target.value)} />
                <input type="password" placeholder='Your Password' value={password} onChange={e => setPassword(e.target.value)} />
                <input type="password" placeholder='Confirm Your Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <button type='submit' disabled={loading}> SIGN UP </button>
            </form>
            <p>Don't have an account? <span> REGISTER NOW </span> </p>
        </div>
    )
}

export default SignUp
