import React from 'react';
import "./Banner.css";

const BannerItem = ({ slide }) => {
    
    const { image, prev, id, next } = slide;

    return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
          <img src={image} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/3">
          <h1 className="text-6xl  font-bold text-white">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2">
          <p className="text-xl font-normal text-white capitalize w-2/3">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/3">
          <button className="btn btn-warning h-14 mr-5 text-lg font-semibold">
            Discover More
          </button>
          <button className="btn btn-outline h-14 btn-warning text-lg font-semibold">
            Latest Project
          </button>
        </div>
      </div>
    );
};

export default BannerItem;