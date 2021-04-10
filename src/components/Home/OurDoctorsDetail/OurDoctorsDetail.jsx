import React from "react";
import "./OurDoctorDetail.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const OurDoctorsDetail = ({ detail }) => {
  return (
    <div className="col-md-4">
      <div className="doctor-detail-container m-auto text-center">
        <img src={detail.img} alt="" />
        <h5 className="mt-3">{detail.name}</h5>
        <small><FontAwesomeIcon icon={faPhone} /> {detail.phone}</small>
      </div>
    </div>
  );
};

export default OurDoctorsDetail;
