import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';


const InfoData = [
  {
    id: 1,
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    id: 2, 
    title: "Visit our location",
    description: "Brooklyn, NY 10003 USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    id: 3,
    title: "Opening Hours",
    description: "+15695843445",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
  <section className="container">
      <div className="row">
      {
          InfoData.map(info => <InfoCard info={info} />)
      }
      </div>
  </section>
  );
};

export default BusinessInfo;
