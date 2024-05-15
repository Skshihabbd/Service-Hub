import { useEffect, useState } from "react";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Custom from "../../sharedcomponent/custom/Custom";
import Swal from "sweetalert2";
import MyserviceCard from "./MyserviceCard";
import Footer from "../../sharedcomponent/footer/Footer";
import { Helmet } from "react-helmet";

const Myservice = () => {
    const { users } = Custom();
  const [state, setState] = useState([]);
  // const [change,setChange]=useState(state)
  // console.log(change)
  console.log(state);
  useEffect(() => {
    fetch(`http://localhost:5020/usersendcollection?email=${users?.email}`)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5020/usersenddata/${id}`,

          { method: "DELETE" }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remain = state.filter((crafs) => crafs._id !== id);
              setState(remain);
            }
          });
      }
    });
  };
    return (
        <div>
          <Helmet>
               
               <title>Service Hub || Myservice</title>
              
           </Helmet>
      <Navbar></Navbar>
      <h1>{state.length? <div className="grid lg:grid-cols-4 gap-3 w-10/12 mx-auto ">
        {state.map((data) => (
          <MyserviceCard
            handleDelete={handleDelete}
            key={data._id}
            data={data}
          ></MyserviceCard>
        ))}
      </div>:'not available'}</h1>
     <Footer></Footer>
    </div>
    );
};

export default Myservice;