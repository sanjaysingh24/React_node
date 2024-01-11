import React from 'react'
import { useState,useContext } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {

const [userid,setuserid] = useState([]);
const [data,setdata] = useState({});
const handlechange =(e)=>{
const{name,value} = e.target;
setdata((prev)=>{
    return{...prev,[name]:value}
})
}
const handlesubmit=async (e)=>{

e.preventDefault();
try{
  const senddata = await axios.post("http://localhost:3000/users",data);
  console.log(senddata.data);

  
}catch(e){
    console.log(e);
}












setdata({
    user:'',
    email:' ',
    password:'',
});
}
  return (
<>
<div className="container">
<form onSubmit = {handlesubmit}>
   <h1>Sign up {userid}</h1>
   <div className='Form_container'>
   <div className='emailbox formbox'>
        <input type="email"name='email' placeholder='Enter your email' onChange={handlechange} value={data.email} />

    </div>
    <div className='Usernamebox formbox'>
        <input type="text"name='user' placeholder='Enter your Username'  onChange={handlechange}  value={data.user} />

    </div>
    <div className='Passwordbox formbox'>
        <input type="password"name='password' placeholder='Enter your password' onChange={handlechange}  value={data.password} />

    </div>
  
<div className='btnbox'>
<button className='Sign_upbtn'>Sign up</button>
</div>
   </div>

</form>


</div>
</>
  )
}

export default Register
