import { useLoaderData } from "react-router-dom";
import CategoriCard from "./CategoriCard";
import Navbar from "../../sharedcomponent/navbar/Navbar";


const Allcategory = () => {
    const datas=useLoaderData()
    console.log(datas)
    return (
        <div>
            <Navbar></Navbar>
            <div>
            
            {datas.map(data=><CategoriCard key={data._id} data={data}></CategoriCard>)} 
          </div>
        </div>
    );
};

export default Allcategory;