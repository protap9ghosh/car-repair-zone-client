import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "signIn",
            element: <SignIn></SignIn>
         },
         {
            path: "signUp",
            element: <SignUp></SignUp>
         },
         {
            path: "checkout/:id",
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({ params }) => fetch(`https://car-doctor-server-protap9ghosh.vercel.app/services/${params.id}`)
         },
         {
            path: "booking",
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
         }
      ]
   },
]);

export default router;