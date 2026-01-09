import React from 'react'
import {useNavigate} from "react-router-dom";
import './Sign.css'
import fb from "../../assets/fb.png";
import x from "../../assets/x.png";
import google from "../../assets/R.png";

const Sign = () => {
    const navigate = useNavigate();

    const logInnNav = ()=>{
        navigate('/login');
    }
    return (
        <div className={'sign-container'}>
            <form>
                <h1>TaskPilot</h1>
                <h3>Login to your account</h3>
                <input type={'email'} name={'email'} placeholder={'Email'} />
                <input type={'password'} name={'password'} placeholder={'Password'} />
                <input type={'password'} name={'confirmPassword'} placeholder={'Confirm Password'} />
                <button type={'submit'}>Login</button>
                <h4>-or login with-</h4>
                <div className={'social-media'}>
                    <div className={'social-media-icon'}>
                        <img src={fb} alt="fb" />
                    </div>
                    <div className={'social-media-icon'}>
                        <img src={x} alt="x" />
                    </div>
                    <div className={'social-media-icon'}>
                        <img src={google} alt="google" />
                    </div>
                </div>
                <h3>Already have an account? <span onClick={logInnNav}>Log in</span></h3>
            </form>
        </div>
    )
}
export default Sign
