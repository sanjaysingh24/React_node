import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login_register from './Page/Login_register'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Page/Home';
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes >
         <Route path='/' element={<Login_register></Login_register>}/>
         <Route path='/home' element ={<Home></Home>}/>

      
     </Routes>


     </BrowserRouter>
    </>
  )
}

export default App
