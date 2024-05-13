import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../../page component/errorpage/Errorpage";
import Root from "./root/Root";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Home from "../../page component/home/Home";
import SignIn from "../SignIn/SignIn";
import SignUP from "../SignUp/SignUP";
import UpdateUser from "../../page component/updateuser/UpdateUser";
import UserAddData from "../../page component/useradd/UserAddData";
import Homecard from "../../page component/homesectioncard/Homecard";

import Cradviewdetailsmake from "../../page component/card and view details/Cradviewdetailsmake";
import PrivetRoute from "../../sharedcomponent/PrivetRoute";
import Myservice from "../../page component/myservices/Myservice";
import Allservice from "../../page component/allservices/Allservice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/navbar",
        element: <Navbar></Navbar>,
      },
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5020/adminsenddata'),
      },
      {
        path: "/homecard",
        element: <Homecard></Homecard>,
       
      },
      
      {
        path:'/cardview/:id',
        element:<PrivetRoute>
          <Cradviewdetailsmake></Cradviewdetailsmake>
        </PrivetRoute>,
        loader:({params})=>fetch(`http://localhost:5020/usersenddata/${params.id}`)
      },

      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
      {
        path: "/update/:id",
        element: <UpdateUser></UpdateUser>,
        loader:({params})=>fetch(`http://localhost:5020/usersenddata/${params.id}`)
      },
      {
        path: "/useradddata",
        element: <UserAddData></UserAddData>,
      },
      {
        path:"/allservice",
        element:<Allservice></Allservice>,
        loader: ()=>fetch("http://localhost:5020/usersenddata")
      },
      {
        path:"/myservice",
        element:<PrivetRoute>
         <Myservice></Myservice>
        </PrivetRoute>
      },
      
    ],
  },
]);
export default router;
