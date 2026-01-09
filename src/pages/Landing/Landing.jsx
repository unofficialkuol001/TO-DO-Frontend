import React,{useEffect} from 'react'
import './landing.css'
import {useNavigate} from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate('/login')
        },3000)
        return () => clearTimeout(timer)
    },[navigate]);

    return (
        <div className={'landing-section'}>
            <h1>TaskPilot</h1>
        </div>
    )
}
export default Landing;
