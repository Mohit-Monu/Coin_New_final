import React, { useState } from "react";
import "./Contact.css";
function Contact() {

  const [message,SetMessage]=useState("Send Message")


  function formSubmitHandler(e){
    e.preventDefault()
    SetMessage("Sent Success...")
  }

  return (
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title text-center m-2">
          <h2>Contact</h2>
        </div>
        <div class="row mt-4">
        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={formSubmitHandler}
              class="php-email-form"
            >
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div class="text-center">
                <button type="submit" >{message}</button>
              </div>
            </form>
          </div>
          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>
                  CCHV+G26, Rd Number 3, Venkateshwara Nagar, Sri Nagar Colony,
                  Aurora Colony, Banjara Hills, Hyderabad, Telangana 500073
                </p>
              </div>
              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>mohdasrarahmed785@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+917780285794</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7033114903265!2d78.43557827429333!3d17.4260202016928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d3286e96b9%3A0x4f104e2e4343e1d5!2sRd%20Number%203%2C%20Venkateshwara%20Nagar%2C%20Banjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1697188315387!5m2!1sen!2sin"
                frameborder="0"
                style={{ border: "0", width: "100%", height: "290px" }}
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
