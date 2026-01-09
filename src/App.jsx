import Landing from './pages/Landing/Landing.jsx'
import Login from './pages/Login/Login.jsx'
import {Routes, Route, Link} from 'react-router-dom'
import Sign from "./pages/Sign/Sign.jsx";
import Home from "./pages/Home/Home.jsx";

const App = () => {

  return (
    <Routes>
        <Route path="/"  element={<Landing />} />
        <Route path="/login"  element={<Login />} />
        <Route path={'/sign'} element={<Sign />} />
        <Route path={'/todo'} element={<Home />} />
    </Routes>
  )
}

export default App
