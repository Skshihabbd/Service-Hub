
const BookedCard = ({infos}) => {
    const{_id,servicePhoto,
        prices,Usersname,Usersemail,Servicsename,
        Serviceid,
        ServiceproviderName,provideremail,
        Servicedate,servicequery,status}=infos
    
    return (
        <div>
             <div className="border-2">
          <img
            className="p-5 h-96 w-full"
            src={servicePhoto}
            alt=""
          />
          <div className="mt-2 space-y-2 font w-5/6 h-3/6 mx-auto  ">
            <p className="text-lg">{Servicsename}</p>
            <p className="text-lg">Price:-{prices}$</p>
            <p>UserDetails:-{servicequery}</p>
            <p>Provider:-{ServiceproviderName}</p>
           
           <h1 className="text-green-800 text-2xl">{status}</h1>
          
          </div>
        </div> 
        </div>
    );
};

export default BookedCard;