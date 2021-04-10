import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <div className="p-2">
        <img className="my-4" src={service.img} alt="" style={{ height: "50px" }} />
        <h5 className="mb-3">{service.name}</h5>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
          possimus.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetail;
