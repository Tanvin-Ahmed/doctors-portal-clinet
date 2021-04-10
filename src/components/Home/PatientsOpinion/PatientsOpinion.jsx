import React from "react";
import "./PatientsOpinion.css";

const PatientsOpinion = ({ opinion }) => {
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <p className="card-text">
              {opinion.opinion}
            </p>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                <div>
                    <img style={{width:"4rem"}} src={opinion.img} alt=""/>
                </div>
                <div className="ml-3">
                    <h5 style={{color:"#16d2c1"}}>{opinion.name}</h5>
                    <small className="text-muted">{opinion.location}</small>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsOpinion;
