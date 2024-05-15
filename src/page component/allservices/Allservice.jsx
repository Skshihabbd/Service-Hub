import { useLoaderData } from "react-router-dom";
import AllserviceCard from "./AllserviceCard";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import { Helmet } from "react-helmet";

const Allservice = () => {
    const loadedData=useLoaderData()
console.log(loadedData)
    return (
        <div>
          <Helmet>
               
               <title>Service Hub || Allservice</title>
              
           </Helmet>
          <Navbar></Navbar>
          <div className="grid grid-cols-1  gap-4">
  
  {loadedData.map(datas=><AllserviceCard key={datas._id} datas={datas}></AllserviceCard>)}
   
   
    
 
</div> 
        </div>
    );
};

export default Allservice;
