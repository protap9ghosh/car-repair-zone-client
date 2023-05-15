import React from 'react';
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
   return (
      <div className="hero py-14 bg-base-200">
         <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 relative'>
               <img src={person} className="md:w-3/4 rounded-lg shadow-2xl" />
               <img src={parts} className="md:w-1/2 rounded-lg shadow-2xl md:absolute right-5 top-1/2 md:border-8 border-white" />
            </div>

            <div className='lg:w-1/2 space-y-5 md:pl-8 md:pr-44'>
               <h3 className='text-[#FF3811] text-3xl font-semibold'>About Us</h3>
               <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
               <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>

               <p>the majority have suffered alteration in some form, by injected humour, or randomizes words which do not look even slightly believable.</p>
               <button className="btn capitalize text-[16px] bg-[#FF3811] hover:bg-[#e0320f] border-none">Get More Info</button>
            </div>
         </div>
      </div>
   );
};

export default About;