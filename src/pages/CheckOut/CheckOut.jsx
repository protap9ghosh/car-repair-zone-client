import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'

const CheckOut = () => {
   const service = useLoaderData();
   const { _id, img, title, price } = service;
   const { user } = useContext(AuthContext);

   const handleService = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = user?.email;
      const booking = {
         customerName: name,
         email,
         img,
         date,
         price,
         service: title,
         service_id: _id
      }
      console.log(booking);

      fetch('https://car-doctor-server-protap9ghosh.vercel.app/bookings', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(booking)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);

            if (data.insertedId) {
               Swal.fire({
                  title: 'Booking Successful',
                  text: 'Your car service booking was successful',
                  icon: 'success',
                  confirmButtonText: 'OK'
               })
            }
         })
   }

   return (
      <div className='bg-[#F3F3F3] pt-14 pb-20'>
         <h2 className='text-4xl text-[#444444] text-center font-semibold'>Book Service: {title}</h2>
         <div className="card-body md:w-3/4 mx-auto">
            <form onSubmit={handleService}>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Name</span>
                     </label>
                     <input type="text" name="name" defaultValue={user?.displayName} className="input" required />
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Date</span>
                     </label>
                     <input type="date" name="date" className="input" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Email</span>
                     </label>
                     <input type="email" defaultValue={user?.email} className="input" required />
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Due Amount</span>
                     </label>
                     <input type="text" defaultValue={'$' + price} className="input" required />
                  </div>
               </div>

               <div className="form-control mt-6">
                  <button className="btn capitalize text-[16px] bg-[#FF3811] hover:bg-[#d83312] border-none">Order Confirm</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default CheckOut;