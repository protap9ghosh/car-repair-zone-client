import React from 'react';
import signIn from "../../assets/images/login/login.svg"

const Login = () => {
   const handleLogin = (event) => {
      
   }

   return (
      <div className="py-20 bg-base-200">
         <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2">
               <img src={signIn} alt="Sign In" />
            </div>

            <div className="card flex-shrink-0 w-full max-w-sm rounded-xl shadow-md bg-base-100 border border-[#D0D0D0]">
               <h1 className="text-4xl text-center mt-10 text-[#444444] font-bold">Login</h1>
               <div className="card-body">
                  <form onSubmit={handleLogin}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6 mb-10">
                        <input type="submit" value="Sing In" className="btn capitalize text-[16px] bg-[#FF3811] hover:bg-[#d83312] border-none" />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;