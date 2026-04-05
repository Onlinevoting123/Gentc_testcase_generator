import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Emailverify from './pages/Emailverify'
import Resetpass from './pages/Resetpass'
import Home from './pages/Home'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Prompt from './pages/Prompt'
import Edge from './pages/Edge'
import Gfg from './pages/Gfg'
import Interviewbit from './pages/Interviewbit'
import Codechef from './pages/Codechef'
import Codeforces from './pages/Codeforces'
import Hackerrank from './pages/Hackerrank'
import Atcoder from './pages/Atcoder'
import Spoj from './pages/Spoj'
import Binarysearch from './pages/Binarysearch'
import Lintcode from './pages/Lintcode'


const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/emailverify' element={<Emailverify/>}/>
        <Route path='/resetpass' element={<Resetpass/>}/>
        <Route path='/e' element={<Edge/>}/>
        <Route path='/e/prompt' element={<Prompt/>}/>
        <Route path='/e/gfg' element={<Gfg/>}/>
        <Route path='/e/interviewbit' element={<Interviewbit/>}/>
        <Route path='/e/codechef' element={<Codechef/>}/>
        <Route path='/e/binarysearch' element={<Binarysearch/>}/>
        <Route path='/e/codeforces' element={<Codeforces/>}/>
        <Route path='/e/atcoder' element={<Atcoder/>}/>
        <Route path='/e/hackerrank' element={<Hackerrank/>}/>
        <Route path='/e/spoj' element={<Spoj/>}/>
        <Route path='/e/lintcode' element={<Lintcode/>}/>
      </Routes>
    </div>
  )
}

export default App
