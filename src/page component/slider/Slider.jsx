import { Swiper, SwiperSlide ,  } from "swiper/react";
import "swiper/css";
// Import Swiper styles
import "swiper/css/bundle";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";
import {Slide} from "react-awesome-reveal"
// import '';
import "./slider.css";

// import required modules
 import { EffectFade, Navigation, Pagination ,Parallax,Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <>
        <Swiper

 autoplay={{delay:1000}}
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[EffectFade, Navigation, Pagination ,Parallax ,Autoplay]}
         
        >
          <SwiperSlide className="">
            <div className="bg-cover  h-[80vh]  bg-[url('https://i.ibb.co/c2vhFDh/total-shape-w-XBK9-Jr-M0i-U-unsplash.jpg')]">
            {/* <h1 className="text-7xl text-rose-900" 
              >shihab sk we are going to tarvel</h1> */}
              {/* <Fade cascade>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
</Fade> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-cover bg-no-repeat  h-[80vh]  bg-[url('https://i.ibb.co/N14kPrM/gina-lin-m27-OTMeg-Uy-A-unsplash.jpg')]">
           
              {/* <Slide direction="down" duration={1000} >
              <h1 className="text-7xl text-rose-900"
              >shihab sk our new mission</h1>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
</Slide> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-cover bg-no-repeat  h-[80vh] bg-[url('https://i.ibb.co/85GHVd0/logan-weaver-lgnwvr-mi4-Gfdl36yg-unsplash.jpg')]">
            {/* <h1 className="text-7xl text-rose-900"
              >shihab sk shudkhkcfdsvhfdhvbfd</h1> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-cover bg-no-repeat  h-[80vh]  bg-[url('https://i.ibb.co/vhq5zKM/sam-moghadam-khamseh-Z4-Q9-KHw9of-E-unsplash.jpg')]">
            {/* <h1 className="text-7xl text-rose-900"
              >shihab sk shudkhkcfdsvhfdhvbfd</h1> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Slider;
