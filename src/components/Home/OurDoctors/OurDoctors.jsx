import React from "react";
import "./OurDoctors.css";
import doctor from "../../../images/doctor.png";
import OurDoctorsDetail from "../OurDoctorsDetail/OurDoctorsDetail";

const doctorsDetails = [
  {
    id: 1,
    name: "Dr. Kabir",
    phone: "+61 452 200 126",
    img: doctor,
  },
  {
    id: 2,
    name: "Dr. Kabir",
    phone: "+61 452 200 126",
    img: doctor,
  },
  {
    id: 3,
    name: "Dr. Kabir",
    phone: "+61 452 200 126",
    img: doctor,
  },
];

const OurDoctors = () => {
  return (
    <div className="doctors-container">
      <h5 style={{ color: "rgb(22, 210, 193)" }} className="text-center">
        OUR DOCTORS
      </h5>
      <div className="row">
        {doctorsDetails.map((detail) => (
          <OurDoctorsDetail key={detail.id} detail={detail} />
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;
