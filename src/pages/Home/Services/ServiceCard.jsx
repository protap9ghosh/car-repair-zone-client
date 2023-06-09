import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
   const { _id, title, img, price } = service;

   return (
      <div className="card w-96 bg-base-100 shadow-sm rounded-xl border">
         <figure className="p-3">
            <img src={img} alt="Shoes" className="rounded-xl h-[237px]" />
         </figure>
         <div className="card-body">
            <h2 className="card-title font-bold">{title}</h2>
            <div className="card-actions items-center">
               <p className="text-[#FF3811] font-semibold">Price: ${price}</p>
               <Link to={`/checkout/${_id}`}>
                  <FaArrowRight className="text-[#FF3811]"/>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;