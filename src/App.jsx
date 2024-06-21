import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './comp/style.css'
import Screen from './comp/Screen'
import Home from './comp/Home'
import Signup from './comp/Signup'
import Login from './comp/Login'
import User from './comp/User'
import { useSelector } from 'react-redux'


function App() {

  const userstatus = useSelector((state) => state.status)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={userstatus ? <Home /> : <Navigate to={'/login'} />}>
            <Route path='' element={<Screen />} />
            <Route path='user' element={<User />} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
