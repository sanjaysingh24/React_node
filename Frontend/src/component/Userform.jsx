import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const Userform = () => {
const [data,Setdata] = useState({});
const [item,Setitem] = useState({});
const[UserId,SetUserid] = useState('');
const[result,Setresult] = useState([]);
const handleinput =(e)=>{
const{name,value} = e.target;
Setdata((prev)=>{
    return{...prev,[name]:value};
})
}
const itemchange =(e)=>{
Setitem(e.target.value);
}


const usersubmit= async (e)=>{

e.preventDefault();

   const response = await fetch('http://localhost:3000/users',{
    method: 'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
 
   })

const result =await response.json();
const userid =result._id;


console.log(result);
SetUserid(userid);
}





const handleSubmit= async(e)=>{
e.preventDefault();
try{
const response =await  axios.post(`http://localhost:3000/addcart/${UserId}`,{item});

console.log(response.data.items);
Setresult(response.data.items);

}catch(err){
console.log(err);
}
}

  return (
<>
{/* this code for use submission */}
<div>
    <form onSubmit = {usersubmit}>
        <input type="text" name='user' onChange={handleinput} value={data.user} />
        <input type="email" name='email' onChange={handleinput} value={data.email} />
        <button>Submituser</button>
       
      
      
    </form>
    <div>{result.map((item,index)=>{
          return(
            <h1 key={index}>{item}</h1>
          )
        })}</div>
</div>

{/* this one is for item submit */}
<div>
      <form onSubmit ={handleSubmit}>
        <input type="text" name='item' onChange={itemchange} value={item.item} />
        <button>Submit</button>
      </form>
    </div>

</>
  )
}

export default Userform
