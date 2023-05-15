import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"

const Banner = () => {
   return (
      <div className="carousel w-full lg:h-[600px]">
         <div id="slide1" className="carousel-item relative w-full">
            <img src={img5} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-6xl text-3xl font-semibold">Affordable Price For Car Servicing</h2>
                  <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div>
                     <button className="btn bg-[#FF3811] hover:bg-[#ff3911c5] capitalize text-[16px] mr-5">Discover More</button>
                     <button className="btn glass capitalize text-[16px]">Latest Project</button>
                  </div>
               </div>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
               <a href="#slide4" className="btn btn-circle mr-5">❮</a>
               <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
         </div>

         <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-6xl text-3xl font-semibold">Affordable Price For Car Servicing</h2>
                  <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div>
                     <button className="btn bg-[#FF3811] hover:bg-[#ff3911c5] mr-5">Discover More</button>
                     <button className="btn glass">Latest Project</button>
                  </div>
               </div>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
               <a href="#slide1" className="btn btn-circle mr-5">❮</a>
               <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
         </div>

         <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-6xl text-3xl font-semibold">Affordable Price For Car Servicing</h2>
                  <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div>
                     <button className="btn bg-[#FF3811] hover:bg-[#ff3911c5] mr-5">Discover More</button>
                     <button className="btn glass">Latest Project</button>
                  </div>
               </div>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
               <a href="#slide2" className="btn btn-circle mr-5">❮</a>
               <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
         </div>

         <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-6xl text-3xl font-semibold">Affordable Price For Car Servicing</h2>
                  <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div>
                     <button className="btn bg-[#FF3811] hover:bg-[#ff3911c5] mr-5">Discover More</button>
                     <button className="btn glass">Latest Project</button>
                  </div>
               </div>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
               <a href="#slide3" className="btn btn-circle mr-5">❮</a>
               <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
         </div>
      </div>
   );
};

export default Banner;