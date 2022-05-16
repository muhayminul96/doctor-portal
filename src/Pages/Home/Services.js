import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

const services = [
  {
    id: 1,
    title: "Fluoride Treatment",
    img: fluoride,
  },
  {
    id: 2,
    title: "Cavity Filling",
    img: cavity,
  },
  {
    id: 3,
    title: "Teeth Whitening",
    img: whitening,
  },
];

const Services = () => {
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Service
        </h3>
        <h2 className="text-4xl">Service We Provide</h2>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={treatment}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="...."
            />
            <div className="text-left mx-10">
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-gradient-to-r from-secondary to-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
