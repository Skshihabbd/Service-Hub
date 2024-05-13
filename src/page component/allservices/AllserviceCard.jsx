import { Link } from "react-router-dom";

const AllserviceCard = ({datas}) => {
    const {name,price ,
        categories,stocks,ServiceImage,_id
        }=datas
    return (
        
        <tbody>
        {/* row 1 */}
        <tr>
          
          <td>
          <img className="w-10 h-10 rounded-full" src={ServiceImage} alt="Avatar Tailwind CSS Component" />
          </td>
          <td>
           {name}
           
          </td>
          <td>{price}</td>
          <td>{categories}</td>
          <td>{stocks}</td>
          <th>
           <Link to={`/cardview/${_id}`}> <button className="btn btn-ghost btn-xs">View details</button> </Link>
          </th>
        </tr>
      
        
        
      </tbody> 
    );
};

export default AllserviceCard;