import { useEffect, useState } from "react";
import Custom from "../../sharedcomponent/custom/Custom";

const Booked = () => {
    const{users}=Custom()
   
    const[info,setInfo]=useState()
    console.log(info)
    useEffect(()=>{
        fetch(`http://localhost:5020/requestsendcollection?Usersemail=${users?.email}`)
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[users])
    return (
        <div>
          <h1>{info?.length?'data avail':'no data'}</h1>  
        </div>
    );
};

export default Booked;