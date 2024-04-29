import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../../page component/errorpage/Errorpage";
import Root from "./root/Root";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Home from "../../page component/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
        { 
            path: "/navbar",
         element: <Navbar></Navbar> ,
        },
        {
            path:"/",
            element:<Home></Home> ,

        }
        
        
        ],
  },
]);
export default router;
