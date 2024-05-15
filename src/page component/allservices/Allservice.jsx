import { useLoaderData } from "react-router-dom";
import AllserviceCard from "./AllserviceCard";
import Navbar from "../../sharedcomponent/navbar/Navbar";

const Allservice = () => {
    const loadedData=useLoaderData()
console.log(loadedData)
    return (
        <div>
          <Navbar></Navbar>
          <div className="grid grid-cols-1  gap-4">
  
  {loadedData.map(datas=><AllserviceCard key={datas._id} datas={datas}></AllserviceCard>)}
   
   
    
 
</div> 
        </div>
    );
};

export default Allservice;
