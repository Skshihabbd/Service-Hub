import { Link } from "react-router-dom";


const TiTleMenu = () => {
    return (
        <div className="bg-cover text-center bg-no-repeat shadow-inner  bg-[url('https://i.ibb.co/G9bcsbX/victor-freitas-Yuv-iw-By-VRQ-unsplash.jpg')] w-full h-[40vh]">
          <p className="text-3xl font-bold font text-white ">About</p>  
<ul className=" flex justify-center text-2xl font text-[#312c25] "><li><Link>Home</Link></li> ||
<li>About</li>
</ul>


        </div>
    );
};

export default TiTleMenu;