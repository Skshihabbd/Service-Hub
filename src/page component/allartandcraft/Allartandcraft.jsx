
import { useLoaderData } from "react-router-dom";
import Allartandcraftcard from "./Allartandcraftcard";


const Allartandcraft = () => {
const loadedData=useLoaderData()
console.log(loadedData)



    return (
        <div>
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
  {loadedData.map(datas=><Allartandcraftcard key={datas._id} datas={datas}></Allartandcraftcard>)}
   
   
    
  </table>
</div> 
        </div>
    );
};

export default Allartandcraft;