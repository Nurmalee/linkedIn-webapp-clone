import React, { useState } from 'react'
import './LoginPage.css'
import linkedIn_Logo from '../app-logo/linkedin-logo-png-1840.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../contextAPI/userAuthContext' 

const ResetPassword = () => {

    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const { forgotPassword } = useAuth()


    const handleResetPassword = async (e) => {
        e.preventDefault()

        try {
            setErrorMessage('')
            setLoading(true)
            await forgotPassword(email)
            setErrorMessage('Please check your inbox for further directions')
            setEmail('')
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
            <form onSubmit={handleResetPassword}>
                <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} required/>
                <button type='submit' disabled={loading}> RESET PASSWORD </button>
            </form>
            <p>Already have an account? <Link to='/login' className='loginPage__link'> LOG IN </Link> </p>
        </div>
    )
}

export default ResetPassword
