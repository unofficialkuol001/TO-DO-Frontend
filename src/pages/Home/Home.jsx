import React,{useState} from 'react'
import './Home.css'

const Home = () => {
    const [tasks, setTasks] = useState('');
    const addTask = async (e)=>{
        e.preventDefault();
        const res = await fetch("http://localhost:3000/todo/app/addTask",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({tasks: tasks})
        })
        if(!res.ok){
            console.log("error");
        }
        const data = await res.json();
        console.log(data);
    }
    return (
        <div className={'Home'}>
            <div className={'home-header'}>
                <h1>Welcome</h1>
                <span>
                    <input onChange={(e)=>setTasks(e.target.value)} value={tasks} type={'text'} placeholder={'Insert task...'} required={true} />
                    <button onClick={addTask} type={'submit'}>Add</button>
                </span>
            </div>
            <div className={'home-content'}>

            </div>
        </div>
    )
}
export default Home;
