import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
   const { googleSignIn } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleGoogleSignIn = () => {
      googleSignIn()
         .then((result) => {
            console.log(result.user);
            Swal.fire({
               title: 'Success',
               text: 'User sign In Successful',
               icon: 'success',
               confirmButtonText: 'OK'
            })
            navigate('/');
         })
         .then((error) => {
            console.log(error);
         })
   }

   return (
      <div>
         <div className="divider">OR</div>
         <div className="text-center">
            <button className="btn btn-circle btn-outline border-none bg-[#E8E8E8] hover:bg-[#d3d0d0] text-2xl">
               <FaFacebookF />
            </button>

            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline border-none bg-[#E8E8E8] hover:bg-[#d3d0d0] text-2xl ml-3">
               <FcGoogle />
            </button>
         </div>
      </div>
   );
};

export default SocialLogin;