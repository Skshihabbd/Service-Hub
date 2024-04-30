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
import HomepostData from "../../page component/homepostdata/HomepostData";
import Cradviewdetailsmake from "../../page component/card and view details/Cradviewdetailsmake";

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
        // loader: () => fetch("http://localhost:5020/usersenddata"),
      },
      {
        path: "/homecard",
        element: <Homecard></Homecard>,
      },
      {
        path: "/homepost",
        element: <HomepostData></HomepostData>,
      },
      {
        path:'/cardview',
        element:<Cradviewdetailsmake></Cradviewdetailsmake>,
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
        path: "/update",
        element: <UpdateUser></UpdateUser>,
      },
      {
        path: "/useradddata",
        element: <UserAddData></UserAddData>,
      },
    ],
  },
]);
export default router;
