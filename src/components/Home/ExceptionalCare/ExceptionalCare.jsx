import React from "react";
import exceptionalCare from "../../../images/exceptionalCare.png";

const ExceptionalCare = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 col-sm-12">
          <img src={exceptionalCare} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h2 style={{color: "#3a4256"}}>Exceptional Dental Care, on Your Teams</h2>
          <p className="text-muted mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            beatae inventore facere earum reiciendis saepe quaerat. Sit quidem
            ea sequi distinctio eligendi quibusdam sunt incidunt rerum placeat.
            Neque, dolore at!
          </p>
          <button type="button" className="mt-3 btn btn-color">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalCare;
