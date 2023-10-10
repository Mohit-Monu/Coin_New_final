import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"; // Import brand icons
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Import solid icon

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="#" className="text-light">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              {/* Add more brand icons as needed */}
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <address>
              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> {/* Use faMapMarkerAlt from free-solid-svg-icons */}
                  CCHV+G26, Rd Number 3, Venkateshwara Nagar, Sri Nagar Colony, Aurora Colony, Banjara Hills, Hyderabad, Telangana 500073
                </li>
                <li>Email: mohdasrarahmed785@gmail.com</li>
                <li>Phone: +917780285794</li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
