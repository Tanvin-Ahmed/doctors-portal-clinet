import React from "react";
import "./Testimonial.css";
import patient1 from "../../../images/Ellipse 1.png";
import patient2 from "../../../images/Ellipse 2.png";
import patient3 from "../../../images/Ellipse 3.png";
import PatientsOpinion from "../PatientsOpinion/PatientsOpinion";
import quote from "../../../images/quote.png";

const opinionData = [
  {
    id: 1,
    name: "Winson Herry",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo aut harum?",
    img: patient1,
    location: "California",
  },
  {
    id: 2,
    name: "Ariana",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo aut harum?",
    img: patient2,
    location: "California",
  },
  {
    id: 3,
    name: "Winson Herry",
    opinion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo aut harum?",
    img: patient3,
    location: "California",
  },
];

const Testimonial = () => {
  return (
    <div className="container testimonial-container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h5 style={{ color: "#16d2c1" }}>TESTIMONIAL</h5>
          <h2 style={{ color: "#474F62" }}>What's Our Patients Says</h2>
        </div>
        <div className="col-md-6 col-sm-12">
            <img className="quoteImg m-auto" src={quote} alt=""/>
        </div>
      </div>
      <div className="mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {opinionData.map((opinion) => (
            <PatientsOpinion key={opinion.id} opinion={opinion} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
