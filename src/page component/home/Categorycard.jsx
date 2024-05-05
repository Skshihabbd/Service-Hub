import { Link } from "react-router-dom";


const Categorycard = ({data}) => {
    const{photourl,categories
    }=data
    return (
        <div className="">
         <div className="border-2 lg:w-52 h-96">
          <img
            className="p-5 h-2/3"
            src={photourl}
            alt=""
          />
          <div className="mt-2 space-y-2 font w-5/6 h-3/6 mx-auto  ">
            <p className="text-lg">{categories}</p>
         
            
          <Link to={`/allcategory/${categories}`}>
          <button className="bg-[#F2F2F2] hover:scale-105 duration-200 rounded-3xl  hover:bg-[#9EA18E] text-xl  text-center px-2 py-2 ">View category </button>
          </Link>
          </div>
        </div> 
        </div>
    );
};

export default Categorycard;