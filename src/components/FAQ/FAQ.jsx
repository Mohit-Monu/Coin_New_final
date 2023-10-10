import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./FAQ.module.css"; // Adjust the import path to your CSS file

function FAQ() {
  const [isOpen, setIsOpen] = useState(0); // Initialize with 0 to open the first question

  const questions = [
    {
      question: "Why Choose Coin.New?",
      answer: (
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> Free and Secure:</strong> Enjoy the benefits of investing without any hidden charges or security concerns. We prioritize the safety and growth of your investments.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> High-Yield Secure:</strong> We offer competitive interest rates, ensuring your hand-earned money works harder for you. Watch your funds multiply effortlessly.
          </li>
        </ul>
      ),
    },
    {
      question: "How to use?",
      answer: (
        // <p>Our investment platform is designed to make the investment process seamless and hassle-free: </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> Free and Secure:</strong> Enjoy the benefits of investing without any hidden charges or security concerns. We prioritize the safety and growth of your investments.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> High-Yield Secure:</strong> We offer competitive interest rates, ensuring your hand-earned money works harder for you. Watch your funds multiply effortlessly.
          </li>
        </ul>
      ),
    },
    {
      question: "Join Thousands of Savvy Investors",
      answer: (
        // <p>Our investment platform is designed to make the investment process seamless and hassle-free: </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> Free and Secure:</strong> Enjoy the benefits of investing without any hidden charges or security concerns. We prioritize the safety and growth of your investments.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> High-Yield Secure:</strong> We offer competitive interest rates, ensuring your hand-earned money works harder for you. Watch your funds multiply effortlessly.
          </li>
        </ul>
      ),
    },{
      question: "Join Thousands of Savvy Investors",
      answer: (
        // <p>Our investment platform is designed to make the investment process seamless and hassle-free: </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> Free and Secure:</strong> Enjoy the benefits of investing without any hidden charges or security concerns. We prioritize the safety and growth of your investments.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> High-Yield Secure:</strong> We offer competitive interest rates, ensuring your hand-earned money works harder for you. Watch your funds multiply effortlessly.
          </li>
        </ul>
      ),
    },{
      question: "Join Thousands of Savvy Investors",
      answer: (
        // <p>Our investment platform is designed to make the investment process seamless and hassle-free: </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> Free and Secure:</strong> Enjoy the benefits of investing without any hidden charges or security concerns. We prioritize the safety and growth of your investments.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> High-Yield Secure:</strong> We offer competitive interest rates, ensuring your hand-earned money works harder for you. Watch your funds multiply effortlessly.
          </li>
        </ul>
      ),
    },
    // Add more questions and answers as needed
  ];

  const toggleAccordion = (index) => {
    if (index === isOpen) {
      setIsOpen(-1); // Close the currently open question if it's clicked again
    } else {
      setIsOpen(index);
    }
  };

  return (
    <div  className="container">
      <h1 className="text-center m-2">FAQ</h1>
      <div className="accordion-header" style={{paddingBottom:"20px",marginTop:"20px"}} id="faqAccordion">
        {questions.map((q, index) => (
          <div className="card" key={index}>
            <div className="card-header" id={`faqHeading${index}`}>
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${isOpen === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  style={{
                    color: "black", // Black text color
                    fontWeight: "bold", // Bold font weight
                    textDecoration: "none", // No underline
                  }}
                >
                  {q.question}
                </button>
              </h5>
            </div>
            <div
              id={`faqCollapse${index}`}
              className={`collapse ${isOpen === index ? 'show' : ''}`}
              aria-labelledby={`faqHeading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">{q.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
