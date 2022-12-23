import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
      <div className="card card-compact p-4 w-96 bg-base-100 shadow-xl">
        <figure>
          <img className='h-56 w-full rounded-2xl' src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold">{title}</h2>

          <div className="card-actions flex justify-between items-center">
            <p className="text-2xl font-semibold text-orange-400">
              Price: ${price}
            </p>
            <Link to={`/checkout/${_id}`} >
              {" "}
              <FaArrowRight className="text-2xl text-orange-400"></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceItem;