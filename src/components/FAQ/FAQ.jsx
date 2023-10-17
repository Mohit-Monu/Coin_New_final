import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./FAQ.module.css"; // Adjust the import path to your CSS file

function FAQ() {
  const [isOpen, setIsOpen] = useState(0); // Initialize with 0 to open the first question

  const questions = [
    {
      question: "How Coin.new Works?",
      answer: "Coin.new simplifies investing, allowing you to start with just 10 Rupees. We invest your money in expert-managed mutual funds. Choose automatic daily deposits or invest spare change from everyday transactions. It's hassle-free investing!"
    },
    {
      question: "What Are The Key Features?",
      answer: (
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> Low Minimum:</strong> Begin investing with only 10 Rupees.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> Daily Deposits:</strong> Save money daily with automated deposits.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> Spare Change:</strong> Invest your change from daily purchases.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> Lump Sum:</strong> Save fixed amounts at your convenience.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong> Flexible Limits:</strong> Adjust your investment amount anytime to match your goals.
          </li>
        </ul>
      ),
    },
    {
      question: "What Are The Documents Required?",
      answer: (
        <>
        <p>To start, you need a few basic documents:</p>
        <ul>
          <li>
             Your PAN (Permanent Account Number) card.
          </li>
          <li>
             KYC (Know Your Customer) documents, which are easy to provide.
          </li>
          <li>
             A linked bank account for seamless transactions.
          </li>
        </ul>
        </>
      ),
    },{
      question: "Where Your Money Goes?",
      answer: "Your invested money goes into ethical mutual funds, managed by financial experts dedicated to growing your investments while upholding ethical standards."
    },{
      question: "Can I Change My Auto Payments Limit?",
      answer: "Absolutely! You have full control over your investments. Adjust your investment amount anytime, increasing or decreasing it to align with your financial goals."
    },
  ];

  const toggleAccordion = (index) => {
    if (index === isOpen) {
      setIsOpen(-1);
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
