import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul className="text-muted" style={{listStyle: "none"}}>
              <li>Emergency Dental Care</li>
              <li>Check Up</li>
              <li>Treatment of Personal Diseases</li>
              <li>Tooth Extraction</li>
              <li>Check Up</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 style={{color: "#16D2C1"}}>Services</h5>
            <ul className="text-muted" style={{listStyle: "none"}}>
              <li>Emergency Dental Care</li>
              <li>Check Up</li>
              <li>Treatment of Personal Diseases</li>
              <li>Tooth Extraction</li>
              <li>Check Up</li>
              <li>Check Up</li>
              <li>Check Up</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 style={{color: "#16D2C1"}}>Our Health</h5>
            <ul className="text-muted" style={{listStyle: "none"}}>
              <li>Emergency Dental Care</li>
              <li>Check Up</li>
              <li>Treatment of Personal Diseases</li>
              <li>Tooth Extraction</li>
              <li>Check Up</li>
              <li>Check Up</li>
              <li>Check Up</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
              <h5 style={{color: "#16D2C1"}}>Our Address</h5>
              <p className="text-muted">New York-101010 Hudson Yards</p>
              <div className="icons d-flex justify-content-around">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>{" "}
              <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>{" "}
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>{""}
              </div>
              <div className="call">
                <p className="mt-5 text-muted">call Now</p>
                <p className="p-2 rounded text-light" style={{backgroundColor: "#16D2C1"}}>+6153465766</p>
              </div>
          </div>
        </div>
        <div className="copy-right mt-3">
            <h6 className="text-center text-muted">&copy; CopyRight {new Date().getFullYear()} All Rights Reserved</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
