import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

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
         }
      ]
   },
]);

export default router;