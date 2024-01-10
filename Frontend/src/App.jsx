import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login_register from './Page/Login_register'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import Home from './Page/Home';
function App() {
const [token,setToken] = useState();

  return (
    <>
     <BrowserRouter>
     <Routes >
         <Route path='/' element={<Login_register setToken ={(newtoken)=>{setToken(newtoken)}}></Login_register>}/>
         <Route path='/home' element ={token?<Home></Home>:<Navigate to='/'></Navigate>}/>

      
     </Routes>


     </BrowserRouter>
    </>
  )
}

export default App
