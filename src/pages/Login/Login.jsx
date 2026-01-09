import React from 'react'
import './Login.css'
import fb from './../../assets/fb.png'
import x from './../../assets/x.png'
import google from './../../assets/R.png'

const Login = () => {
    return (
        <div className={'login-container'}>
            <form>
                <h1>TaskPilot</h1>
                <h3>Login to your account</h3>
                <input type={'email'} name={'email'} placeholder={'Email'} />
                <input type={'password'} name={'password'} placeholder={'Password'} />
                <button type={'submit'}>Login</button>
                <h4>-or login with-</h4>
                <div className={'social-media'}>
                    <div>
                        <img src={fb} alt="fb" />
                    </div>
                    <div>
                        <img src={x} alt="x" />
                    </div>
                    <div>
                        <img src={google} alt="google" />
                    </div>
                </div>
                <h3>Do not have account? <span>Sign up</span></h3>
            </form>
        </div>
    )
}
export default Login
