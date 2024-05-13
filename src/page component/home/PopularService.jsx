import { Link } from "react-router-dom";


const PopularService = ({data}) => {
    const{ServiceImage
    }=data
    return (
        <div className="">
         <div className="border-2 lg:w-52 h-96">
          <img
            className="p-5 h-2/3"
            src={ServiceImage}
            alt=""
          />
          <div className="mt-2 space-y-2 font w-5/6 h-3/6 mx-auto  ">
            <p className="text-lg">{}</p>
         
            
          
          </div>
        </div> 
        </div>
    );
};

export default PopularService;