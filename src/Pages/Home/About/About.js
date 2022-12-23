import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
      <div className="hero py-10 bg-transparent">
        <div className="hero-content flex-col lg:flex-row">
          <div className="relative w-1/2">
            <img src={person} alt="" className="rounded-lg w-4/5 h-full shadow-2xl" />
            <img className="rounded-lg shadow-2xl w-2/4 border-8 right-5 top-1/2 absolute" src={parts} alt="" />
          </div>
          <div className="w-1/2">
            <p className="text-2xl font-semibold text-orange-500 mb-3">
              About Us
            </p>
            <h1 className="text-5xl font-bold">
              We are qualified <br />
              & of experience <br />
              in this field
            </h1>
            <div className="py-6 text-xl">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p className="mt-3">
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
            </div>
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;