import React from "react";
import Appointment from "../Appointment/Appointment";
import Blog from "../Blog/Blog";
import ContactForm from "../ContactForm/ContactForm";
import ExceptionalCare from "../ExceptionalCare/ExceptionalCare";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import OurDoctors from "../OurDoctors/OurDoctors";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <ExceptionalCare />
      <Appointment />
      <Testimonial />
      <Blog />
      <OurDoctors />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
