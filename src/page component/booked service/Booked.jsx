import { useEffect, useState } from "react";
import Custom from "../../sharedcomponent/custom/Custom";
import BookedCard from "./BookedCard";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Footer from "../../sharedcomponent/footer/Footer";
import { Helmet } from "react-helmet";

const Booked = () => {
    const{users}=Custom()
   
    const[info,setInfo]=useState([])
    console.log(info)
    useEffect(()=>{
        fetch(`https://server-shihab.vercel.app/requestsendcollection?Usersemail=${users?.email}`)
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[users])
    return (
        <div>
            <Helmet>
               
               <title>Service Hub || Booked</title>
              
           </Helmet>
            <Navbar></Navbar>
          <h1>{info?.length?<div className="grid gap-2 lg:grid-cols-2 justify-center w-10/12 mx-auto my-6">
          {
            info.map(infos=><BookedCard key={infos._id} infos={infos}></BookedCard>)
          } 
          </div>:'no data'}</h1> 
          
          <Footer></Footer>
        </div>
    );
};

export default Booked;