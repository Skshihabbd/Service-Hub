import { useLoaderData } from "react-router-dom";
import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import Minislider from "../../sharedcomponent/minilider/Minislider";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Slider from "../slider/Slider";

import "./home.css";
import PopularService from "./PopularService";
const Home = () => {

const datas=useLoaderData()
console.log(datas)

  return (
    <div>
      <div className=" z-40 lg:fixed lg:w-full lg:nav ">
        <Navbar></Navbar>
      </div>
      <div className="lg:pt-32 ">
        <h1 className="py-9 bg-yellow-800 ">
          We ship nationwide. 30-day return policy. Free standard shipping on
          orders over $75
        </h1>
      </div>
      <div>
        <TiTleMenu></TiTleMenu>
      </div>
      <div className="">
        <Slider></Slider>
      </div>
      <h1 className="text-3xl font-bold ml-8 my-5">Popular service</h1>
     <div className="flex flex-col gap-2 lg:flex-row justify-center w-10/12 mx-auto">
    
{datas.slice(1,7).map(data=><PopularService key={data._id} data={data}></PopularService>)}
     </div>

      <div className="my-10">
         <Minislider></Minislider>
         </div>
         <div>
         <Minislider></Minislider>
         </div>
        
        

      <Footer></Footer>
    </div>
  );
};

export default Home;
