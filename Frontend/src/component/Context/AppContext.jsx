import { createContext ,useState} from "react";

export const globaldata = createContext();



const Globaldataprovider = (props)=>{
const [userId,setdataid] = useState([]);
const sets=(newdata)=>{
  setdataid(newdata);
}
    const contextvalues  = {userId,sets};    
return(
    <globaldata.Provider value = {contextvalues}>{props.children}</globaldata.Provider>
)
}
export default Globaldataprovider;