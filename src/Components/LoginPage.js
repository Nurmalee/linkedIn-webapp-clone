import React, { useState } from 'react'
import './LoginPage.css'
import linkedIn_Logo from '../app-logo/linkedin-logo-png-1840.png'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contextAPI/userAuthContext' 

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const { signIn } = useAuth()
    const history = useHistory()


    const handleSignInForm = async (e) => {
        e.preventDefault()

        try {
            setErrorMessage('')
            setLoading(true)
            await  signIn(email, password)
            history.push("/")
            setEmail('')
            setPassword('')
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
            <form onSubmit={handleSignInForm}>
                <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type="password" placeholder='Your Password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit' disabled={loading}> LOG IN </button>
            </form>
            <p>Don't have an account? <Link to='/signup' className='loginPage__link'> REGISTER NOW </Link> </p>
        </div>
    )
}

export default LoginPage
