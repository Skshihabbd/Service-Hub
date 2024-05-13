import Swal from "sweetalert2";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import {  useState } from "react";

import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import { useLoaderData } from "react-router-dom";
const UpdateUser = () => {

const userUpdate=useLoaderData()
   console.log(userUpdate)

    const{_id 
        
        }=userUpdate
    
        const[ServiceName,setnewData]=useState()

        const newdatasubmit=(e)=>{
            setnewData(e.target.value)
        }




  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    // console.log(form)
    const ServiceArea = form.Area.value;
    
    const price = form.price.value;
    
    
    const description = form.details.value;
    const ServiceImage = form.photourl.value;
    // const userImage=users?.photoURL
    // const username=users?.displayName 
    // const useremail=users?.email
 
    console.log(ServiceArea,price,  description, ServiceImage,ServiceName);
    const Serviceinfo = {
      ServiceArea,price,  description, ServiceImage,ServiceName,
      
    };
    console.log(Serviceinfo);
    fetch(`http://localhost:5020/usersenddata/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Serviceinfo),
    })
      .then((res) => res.json())
      .then((info) => {
        if (info.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // form.reset()
        }
      });
  };
  return (
    <div>
    <Navbar></Navbar>
    <div>
      <TiTleMenu></TiTleMenu>
    </div>
    <div className="bg-[#F4F3F0]  ">
      <h1 className="text-center mb-10 text-3xl">Update  data to DataBase</h1>
      <p className="text-center w-4/6 mx-auto">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <section className="p-6  mx-auto    dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleSubmit}
          className=" w-full   flex flex-col mx-auto space-y-12"
        >
          <fieldset className=" border-2 w-full gap-6 p-6  mx-auto rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6  gap-10 col-span-full  lg:col-span-full">
            <div className="col-span-full  ">
               
               <div className="col-span-full">
             <select onChange={newdatasubmit} required    className="select select-primary w-full max-w-xs">
              
              <option  disabled selected>
Service Name
              </option> 
              <option value={'zym'} >
zym
              </option> 
              <option value={'Fat reduction'}>
Fat reduction
              </option> 
              </select>
             </div>
             </div>
             
              
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
               Service Area
                </label>
                <input
                 
                  id="username"
                  type="text"
                  name="Area"
                  placeholder="Enter Service location"
                  className="w-full h-full  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                price
                </label>

                
                <input
                  id="lastname"
                  type="number"
                  name="price"
                  placeholder="Enter price Taka"
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              
              
              
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="email" className="text-sm">
                Service description
                </label>
                <input
                required
                  id="email"
                  type="text"
                  name="details"
                  placeholder="Enter Service description"
                  className="w-full rounded-md focus:ring  h-full  focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full  ">
                <label htmlFor="email" className="text-sm">
                Service PhotoUrl
                </label>
                <input
                  id="text"
                  type="text"
                  name="photourl"
                  placeholder="Enter photo URL"
                  className="w-full rounded-md focus:ring  h-full  focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              
             
             
              
            </div>
          </fieldset>
          <button className="btn btn-block bg-black text-yellow-500">
            Add service
          </button>

         
        </form>
      </section>
    </div>
    <Footer></Footer>
  </div>
  );
};

export default UpdateUser;