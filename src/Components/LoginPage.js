import React from 'react'
import './LoginPage.css'
import linkedIn_Logo from '../app-logo/linkedin-logo-png-1840.png'

const LoginPage = () => {
    return (
        <div className='loginPage'>
            {/* <strong>LINKEDIN LOGIN PAGE REMASTERED</strong> */}
            <div className="loginPage__logo">
                <img src={linkedIn_Logo} alt='LinkedIn_Logo'/>
            </div>
       
            <form>
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Email Address'/>
                <input type="text" placeholder='Profile Pic Url'/>
                <input type="password" placeholder='Your Password'/>
                <button> SIGN IN </button>
            </form>
            <p>Don't have an account? <span> REGISTER NOW </span> </p>
        </div>
    )
}

export default LoginPage
