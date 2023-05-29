import React, { useContext } from 'react';
import Img from "../../assets/images/login/login.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
   const { createUser } = useContext(AuthContext);

   const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const user = { name, email, password }
      // console.log(user);

      createUser(email, password)
         .then(result => {
            const user = result.user;
            // console.log(user);
         })
         .catch(error => {
            console.log(error);
         })
   }

   return (
      <div className="py-20 bg-base-200">
         <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2">
               <img src={Img} alt="Sign In" />
            </div>

            <div className="card flex-shrink-0 w-full max-w-sm rounded-xl shadow-md bg-base-100 border border-[#D0D0D0]">
               <h1 className="text-4xl text-center mt-10 text-[#444444] font-bold">Sing Up</h1>
               <div className="card-body">
                  <form onSubmit={handleSignUp}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                     </div>

                     <div className="form-control mt-6 mb-10">
                        <input type="submit" value="Sing Up" className="btn capitalize text-[16px] bg-[#FF3811] hover:bg-[#d83312] border-none" />
                     </div>
                  </form>
                  <small className='text-center'>Already have an account? <Link to="/signIn" className='text-[#FF3811] font-bold'>Sign In</Link></small>
                  <SocialLogin></SocialLogin>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;