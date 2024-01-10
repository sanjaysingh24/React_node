import React,{useState} from 'react';
import axios from 'axios';
const Home = () => {
const [data,setData] = useState({});
const handlechange = (e)=>{
    setData(e.target.value);

}

    const handlesubmit=async(e)=>{
e.preventDefault();
try{
const senddata  = await axios.post('')
}catch(e){
  console.log(e.message);
}
}
  return (
    <div>
      <div className='main_title'>
        <h1>this is a home Page</h1>
        <form onSubmit={handlesubmit}> 
            <input type="text" name='item' onChange={handlechange} value={data.item} />
            <button>Add to cart</button>
        </form>
      </div>
    </div>
  )
}

export default Home
