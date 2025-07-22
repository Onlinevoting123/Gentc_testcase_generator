import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Emailverify from './pages/Emailverify'
import Resetpass from './pages/Resetpass'
import Home from './pages/Home'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Prompt from './pages/Prompt'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/emailverify' element={<Emailverify/>}/>
        <Route path='/resetpass' element={<Resetpass/>}/>
        <Route path='/prompt' element={<Prompt/>}/>
      </Routes>
    </div>
  )
}

export default App
