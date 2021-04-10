import React from "react";
import "./Services.css";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
 
const serviceData = [
    {
        id:1,
        name: "Fluoride Treatment",
        img: fluoride
    },
    {
        id:2,
        name: "Cavity Filling",
        img: cavity
    }, {
        id:3,
        name: "Teeth Whitening",
        img: whitening
    }
];

const Services = () => {
  return (
    <section className="services-container container">
      <div className="text-center">
        <h5 style={{color:"#15D2C9"}}>OUR SERVICES</h5>
        <h2 style={{color: "#3C4356"}}>Services We Provide</h2>
      </div>
      <div className="row mt-5 pt-4">
          {
              serviceData.map(service => <ServiceDetail key={service.id} service={service} />)
          }
      </div>
    </section>
  );
};

export default Services;
