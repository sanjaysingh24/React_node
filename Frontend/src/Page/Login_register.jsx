import React,{useState} from 'react'
import Login from '../component/Signup/Login'
import Register from '../component/Signup/Register'


const Login_register = () => {
const [islogin,setlogin] =useState(false);
  return (
    <div className='outer_container'>
        {islogin?<Login></Login>:<Register></Register>}
      <p className=' login_register '> {islogin?' New User ':'Already Register '} <a  onClick={()=>setlogin(!islogin)}>{islogin?'register here':' login here'}</a></p>
    </div> 
  )
}

export default Login_register
