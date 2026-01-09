import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Sign.css';
import fb from "../../assets/fb.png";
import x from "../../assets/x.png";
import google from "../../assets/R.png";

const Sign = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const loginNav = () => navigate('/login');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/authentication/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Registration failed");
                return;
            }

            console.log("Registration success:", data);
            navigate('/login');
        } catch (err) {
            console.error("Server error", err);
        }
    };

    return (
        <div className="sign-container">
            <form onSubmit={handleSubmit}>
                <h1>TaskPilot</h1>
                <h3>Register into TaskPilot</h3>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button type="submit">Register</button>

                <h4>- or sign up with -</h4>

                <div className="social-media">
                    <div className="social-media-icon"><img src={fb} alt="fb" /></div>
                    <div className="social-media-icon"><img src={x} alt="x" /></div>
                    <div className="social-media-icon"><img src={google} alt="google" /></div>
                </div>

                <h3>
                    Already have an account? <span onClick={loginNav}>Log in</span>
                </h3>
            </form>
        </div>
    );
};

export default Sign;
