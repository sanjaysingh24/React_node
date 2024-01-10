import React,{useState} from 'react'
import './Register.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const Login = () => {
const [data,setdata]  = useState({});
const navigate = useNavigate();
const handlechange =(e)=>{
    const{name,value} = e.target;
    setdata((prev)=>{
        return {...prev,[name]:value}
    })
}
const handlesubmit =async (e)=>{
e.preventDefault();

try{
const senddata = await axios.post("http://localhost:3000/login",data)
if(senddata.data.success){
    navigate('/home');
    console.log("login");
}else{
   console.log("error");
}


}catch(e){

}


setdata({
    user:'',
    password:'',
})
}
  return (
    <div className="container">
    <form onSubmit={handlesubmit}>
      <h1>Login</h1>
       <div className='Form_container'>
      
        <div className='Usernamebox formbox'>
            <input type="text"name='user' placeholder='Enter your Username' onChange={handlechange} value={data.user} />
    
        </div>
        <div className='Passwordbox formbox'>
            <input type="password"name='password' placeholder='Enter your password' onChange={handlechange} value={data.password}  />
    
        </div>
      
    <div className='btnbox'>
    <button className='Sign_upbtn'>Login</button>
    </div>
       </div>

    
    </form>
    
    </div>
  )
}

export default Login
