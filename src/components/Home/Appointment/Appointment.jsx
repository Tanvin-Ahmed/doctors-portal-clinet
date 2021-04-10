import React from "react";
import "./Appointment.css";
import doctor from "../../../images/doctor.png";

const Appointment = () => {
  return (
    <div className="appointment-container">
      <div className="">
        <img src={doctor} alt="" className="appoint-img" />
      </div>
      <div className="text">
        <h5 style={{color:"#16D2C1"}}>APPOINTMENT</h5>
        <h2>
          Make an appointment <br /> Today
        </h2>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
          eaque?
        </p>
        <button className="btn btn-color">Learn More</button>
      </div>
    </div>
  );
};

export default Appointment;
