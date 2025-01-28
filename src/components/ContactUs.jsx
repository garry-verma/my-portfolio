
import React from "react";


const ContactUs = () => {
  return (
    <div className="contactus-form-container" id="contactme">
      <div className="container">
        <h1 className="contactus-heading">Contact me</h1>
        <h3 className="contactus-sub-heading">
          Questions, thoughts, or just want to say hello?
        </h3>

        <div className="contactus-form-container">
          <form className="form" action="">
            <div className="formfield-container">
              <input
                className="formfield"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <input
                className="formfield"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <input
                className="formfield"
                type="text"
                name="subject"
                placeholder="Enter your subject"
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="formfield formfield-textarea"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div>
              <button type="submit" className="btn-pink" id="submit-btn">
                Send Message
                <i className="submit-icon fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
