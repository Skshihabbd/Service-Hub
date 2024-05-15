import { Link, useLoaderData } from "react-router-dom";
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
     <div className="grid gap-2 lg:grid-cols-2 justify-center w-10/12 mx-auto">
    
{datas.slice(1,7).map(data=><PopularService key={data._id} data={data}></PopularService>)}
     </div>
<div className="lg:ml-32 my-10">
 <p> All Services</p>
  <button className="btn btn-primary"><Link to={'/allservice'}>Go to All Services</Link></button>
</div>
      <div className="my-10">
         <Minislider></Minislider>
         </div>
         <div>
         <Minislider></Minislider>
         </div>
        
        <div className="my-10 ">
<img className="w-full h-svh " src="https://i.ibb.co/j6FLhBr/humphrey-muleba-d-Dp-6p-Xr-Yik-unsplash.jpg" alt="" />
        </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
