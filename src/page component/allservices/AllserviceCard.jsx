import { Link } from "react-router-dom";

const AllserviceCard = ({datas}) => {
    const {ServiceImage,userImage,description,ServiceName,price,_id,
      username
      
        }=datas
 // 
         

    return (
        
       <div>
        <div className="card card-side bg-base-100 shadow-xl flex flex-col justify-center lg:flex-row">
  <figure><img className="w-52 h-52" src={ServiceImage} alt="Movie"/></figure>
  <div className="card-body lg:w-6/12">
    <h2 className="card-title">{ServiceName}</h2>
    <p className="lg:w-6/12  ">{description}</p>
    <p className="text-2xl"><span className="text-3xl font-bold">Price:-</span>{price}$</p>
    <p>Service Provider:{username} <img className="w-7 h-7 rounded-full" src={userImage} alt="" /></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"> <Link to={`/cardview/${_id}`}> <button className="btn btn-ghost btn-xs">View details</button> </Link></button>
    </div>
  </div>
</div>
       </div> 
         
    );
};

export default AllserviceCard;