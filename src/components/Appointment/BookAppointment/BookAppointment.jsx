import React from "react";
import BookingCard from "../BookingCard/BookingCard";
import "./BookAppointment.css";

const AppointmentData = [
  {
    id: 1,
    title: "Cosmetic Dentistry",
    time: "10:05 AM - 11:30 AM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: 2,
    title: "Teeth Orthodontic",
    time: "8:00 AM - 9:00 AM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: 3,
    title: "Teeth Cleaning",
    time: "5:00 PM - 6:30 PM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: 4,
    title: "Cavity Protection",
    time: "7:00 AM - 8:30 AM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: 1,
    title: "Teeth Orthodontic",
    time: "8:00 AM - 9:00 AM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: 1,
    title: "Teeth Orthodontic",
    time: "11:00 AM - 12:30 PM",
    space: "10 SPACES AVAILABLE",
  },
];

const BookAppointment = ({ date }) => {
  return (
    <section className="container">
      <h2 className="text-center text-brand">
        Available Appointments on {date.toDateString()}
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {AppointmentData.map((booking) => (
          <BookingCard booking={booking} date={date} key={booking.id} />
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
