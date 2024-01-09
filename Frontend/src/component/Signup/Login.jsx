import React,{useState} from 'react'
import './Register.css';
const Login = () => {
const [data,setdata]  = useState({});
const handlechange =(e)=>{
    const{name,value} = e.target;
    setdata((prev)=>{
        return {...prev,[name]:value}
    })
}
const handlesubmit =(e)=>{
e.preventDefault();
setdata({
    username:'',
    password:'',
})
}
  return (
    <div className="container">
    <form onSubmit={handlesubmit}>
      <h1>Login</h1>
       <div className='Form_container'>
      
        <div className='Usernamebox formbox'>
            <input type="text"name='username' placeholder='Enter your Username' onChange={handlechange} value={data.username} />
    
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
