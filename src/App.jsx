import Landing from './pages/Landing/Landing.jsx'
import Login from './pages/Login/Login.jsx'
import {Routes, Route, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const App = () => {

  return (
    <Routes>
        <Route path="/"  element={<Landing />} />
        <Route path="/login"  element={<Login />} />
    </Routes>
  )
}

export default App
