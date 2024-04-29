import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import Minislider from "../../sharedcomponent/minilider/Minislider";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Slider from "../slider/Slider";

import "./home.css";
const Home = () => {
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
      <div className="bg-black h-7 w-full"></div>
      {/* <div>
         <Minislider></Minislider>
         </div>
         <div>
         <Minislider></Minislider>
         </div>
         <div>
         <Minislider></Minislider>
         </div>
         <div>
         <Minislider></Minislider>
         </div>
         <div>
         <Minislider></Minislider>
         </div>
         <div>
         <Minislider></Minislider>
         </div>
         <div>
         <Minislider></Minislider>
         </div>
         <div>
         <Minislider></Minislider>
         </div> */}

      <Footer></Footer>
    </div>
  );
};

export default Home;
