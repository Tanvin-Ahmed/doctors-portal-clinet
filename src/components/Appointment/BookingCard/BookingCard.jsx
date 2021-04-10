import React from "react";
import { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./BookingCard.css";

const BookingCard = ({booking, date}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col mt-4">
      <div className="card h-100 text-center">
        <div className="card-body">
          <h5 className="card-title">{booking.title}</h5>
          <h6 className="card-text">{booking.time}</h6>
          <small className="card-text">{booking.space}</small>
        </div>
        <div className="card-footer">
          <button onClick={openModal} className="btn btn-color">BOOK APPOINTMENT</button>
          <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn = {booking.title} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
