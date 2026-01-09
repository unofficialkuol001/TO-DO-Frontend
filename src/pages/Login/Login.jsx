import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import fb from './../../assets/fb.png';
import x from './../../assets/x.png';
import google from './../../assets/R.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signUpNav = () => navigate('/sign');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/authentication/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Login failed");
                return;
            }

            // ✅ Save JWT token
            localStorage.setItem("token", data.token);

            console.log("JWT saved:", data.token);

            navigate('/todo'); // dashboard
        } catch (error) {
            console.error("Server error:", error);
        }
    };


    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>TaskPilot</h1>
                <h3>Login to your account</h3>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>

                <h4>- or login with -</h4>

                <div className="social-media">
                    <div className="social-media-icon"><img src={fb} alt="fb" /></div>
                    <div className="social-media-icon"><img src={x} alt="x" /></div>
                    <div className="social-media-icon"><img src={google} alt="google" /></div>
                </div>

                <h3>
                    Don’t have an account? <span onClick={signUpNav}>Sign up</span>
                </h3>
            </form>
        </div>
    );
};

export default Login;
