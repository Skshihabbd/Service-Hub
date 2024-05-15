import { Link } from "react-router-dom";


const PopularService = ({data}) => {
    const{ServiceImage,_id,userImage,description,ServiceName,price,username
    }=data
    return (
        <div className="">
         <div className="border-2">
          <img
            className="p-5 h-96 w-full"
            src={ServiceImage}
            alt=""
          />
          <div className="mt-2 space-y-2 font w-5/6 h-3/6 mx-auto  ">
            <p className="text-lg">{ServiceName}</p>
            <p className="text-lg">Price:-{price}$</p>
            <p>{description}</p>
            <p>Provider:-{username}</p>
           
            <button className="btn btn-primary"> <Link to={`/cardview/${_id}`}> <button className="btn btn-ghost btn-xs">View details</button> </Link></button>
            
          
          </div>
        </div> 
        </div>
    );
};

export default PopularService;