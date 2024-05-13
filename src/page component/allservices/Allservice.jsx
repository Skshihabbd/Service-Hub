import { useLoaderData } from "react-router-dom";
import AllserviceCard from "./AllserviceCard";
import Navbar from "../../sharedcomponent/navbar/Navbar";

const Allservice = () => {
    const loadedData=useLoaderData()
console.log(loadedData)
    return (
        <div>
          <Navbar></Navbar>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Category</th>
      </tr>
    </thead>
  {loadedData.map(datas=><AllserviceCard key={datas._id} datas={datas}></AllserviceCard>)}
   
   
    
  </table>
</div> 
        </div>
    );
};

export default Allservice;
