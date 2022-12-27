import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://genius-car-server-dev-sajjad.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center">
        <p className="text-2xl text-orange-600 font-semibold">Service</p>
        <h2 className="text-5xl font-bold py-3">Our Service Area</h2>
        <p className="text-xl">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default Services;
