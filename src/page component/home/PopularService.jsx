import { Link } from "react-router-dom";


const PopularService = ({data}) => {
    const{ServiceImage,_id,userImage,description,ServiceName,price,username
    }=data
    return (
        <div className="">
         <div className="border-2 lg:w-52 h-96">
          <img
            className="p-5 h-3/6 w-full"
            src={ServiceImage}
            alt=""
          />
          <div className="mt-2 space-y-2 font w-5/6 h-3/6 mx-auto  ">
            <p className="text-lg">{ServiceName}</p>
            <p className="text-lg">Price:-{price}$</p>
            <p>Provider:-{username}</p>
           
         
            
          
          </div>
        </div> 
        </div>
    );
};

export default PopularService;