import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 text-light px-1">
      <div className={`info-${info.background} d-flex justify-content-around align-items-center flex-wrap p-4`}>
        <div className="display-4">
          <FontAwesomeIcon icon={info.icon} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
