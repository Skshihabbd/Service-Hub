import { Link } from "react-router-dom";


const CategoriCard = ({data}) => {
    const{price,_id,photourl,title}=data
    return (
        <div>
           <div className="border-2 lg:w-52 h-96">
          <img
            className="p-5 h-2/3"
            src={photourl}
            alt=""
          />
          <div className="mt-2 space-y-4 font w-5/6 h-3/6 mx-auto  ">
            <p className="text-xl">{title} </p>
            <p className="text-lg">rating:4.6</p>
            <p>BDT {price}$</p>
           <Link to={`/cardview/${_id}`}> <button className="bg-[#F2F2F2] hover:scale-105 duration-200 rounded-3xl  hover:bg-[#9EA18E] text-xl  text-center px-2 py-2 ">View Details </button></Link>
          </div>
        </div> 
        </div>
    );
};

export default CategoriCard;