/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2'

const Bookings = () => {
   const { user } = useContext(AuthContext);
   const [bookings, setBookings] = useState([]);

   const url = `http://localhost:5000/bookings?email=${user?.email}`;
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setBookings(data))
   }, [url]);

   const handleDelete = id => {
      const proceed = confirm('Are you sure you want to delete')

      if (proceed) {
         fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE',
         })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               if (data.deletedCount > 0) {
                  alert('Deleted successfully')
                  const remaining = bookings.filter(booking => booking._id !== id);
                  setBookings(remaining);
               }
            })
      }
   }

   const handleBookingConfirm = id => {
      fetch(`http://localhost:5000/bookings/${id}`, {
         method: 'PATCH',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify({status: 'confirm'})
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
               // update state
            }
         })
   }

   return (
      <div>
         <h1 className='text-5xl text-center text-[#444444] font-semibold pb-8'>Your Booking: {bookings.length}</h1>
         <div className="overflow-x-auto w-full">
            <table className="table w-full">
               {/* head */}
               <thead>
                  <tr>
                     <th>
                        <label>
                           <input type="checkbox" className="checkbox" />
                        </label>
                     </th>
                     <th>Image</th>
                     <th>Service</th>
                     <th>Date</th>
                     <th>Price</th>
                     <th>Status</th>
                  </tr>
               </thead>

               <tbody>
                  {
                     bookings.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleBookingConfirm={handleBookingConfirm}
                     ></BookingRow>)
                  }
               </tbody>

            </table>
         </div>
      </div>
   );
};

export default Bookings;