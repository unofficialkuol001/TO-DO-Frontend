import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className={'Home'}>
            <div className={'home-header'}>
                <h1>Welcome</h1>
                <span>
                    <input type={'text'} placeholder={'Insert task...'} required={true} />
                    <button type={'submit'}>Add</button>
                </span>
            </div>
            <div className={'home-content'}>

            </div>
        </div>
    )
}
export default Home
