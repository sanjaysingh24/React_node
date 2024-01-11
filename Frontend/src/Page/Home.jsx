import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import { globaldata } from '../component/Context/AppContext';
const Home = () => {
const [data,setData] = useState({});
const{userId} = useContext(globaldata);




const handlechange = (e)=>{
    setData(e.target.value);

}
const handlesubmit=async(e)=>{
  e.preventDefault();
  try{
  const senddata  = await axios.post(`http://localhost:3000/addcart/${userId}`,data);
  console.log(senddata.data);
  }catch(e){
    console.log(e.message);
  }
  }
 useEffect(()=>{
  console.log(userId);
  
 },[userId])
  return (
    <div>
      <div className='main_title'>
        <h1>this is a home Page</h1>
        <form onSubmit={handlesubmit}> 
            <input type="text" name='item' onChange={handlechange} value={data.item} />
            <button>Add to cart</button>

        </form>
        {userId}
   
      </div>
    </div>
  )
}

export default Home
