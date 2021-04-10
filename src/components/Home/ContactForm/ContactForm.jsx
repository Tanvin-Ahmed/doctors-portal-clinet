import React from 'react';
import "./ContactForm.css";

const ContactForm = () => {
    return (
        <div className="contact text-center">
            <div className="container">
                <div className="text-center">
                    <h5 style={{color:"rgb(22, 210, 193)"}}>CONTACT US</h5>
                    <h2 style={{color:"white"}}>Always Contact with us</h2>
                </div>
                <form>
                    <input className="form-control my-3" type="email" placeholder="Email" />
                    <input className="form-control my-3" type="text" placeholder="Subject" />
                    <textarea className="form-control my-3" placeholder="Message" cols="30" rows="10"></textarea>
                    <button type='submit' className="btn btn-color" >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;