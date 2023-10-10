import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! If you have any questions, suggestions, or
        feedback, please don't hesitate to get in touch with us.
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
