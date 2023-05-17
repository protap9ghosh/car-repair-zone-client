/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
   const { user } = useContext(AuthContext);
   const [bookings, setBookings] = useState([]);

   const url = `http://localhost:5000/bookings?email=${user?.email}`;
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setBookings(data))
   }, [])

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
                     <th>Name</th>
                     <th>Customer Name</th>
                     <th>Email</th>
                     <th>Price</th>
                     <th>Details</th>
                  </tr>
               </thead>

               <tbody>
                  {
                     bookings.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                     ></BookingRow>)
                  }
               </tbody>

            </table>
         </div>
      </div>
   );
};

export default Bookings;