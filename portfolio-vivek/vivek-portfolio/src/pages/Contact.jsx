import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.target.reset();
  };

  return (
    <div className="contact-bg">
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p className="contact-desc">
          Have a question, project, or just want to say hi? Fill out the form or email me directly!
        </p>
        <a
          href="mailto:viveksingh14538@gmail.com"
          className="mailto-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          📧 Email Me Directly
        </a>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
          />
          <button type="submit">Send Message</button>
          {submitted && (
            <div className="thankyou-msg">
              Thank you! Your message has been submitted.
            </div>
          )}
        </form>
        <div className="contact-info">
          <div>
            <strong>Email:</strong>{" "}
            <a href="mailto:viveksingh14538@gmail.com">viveksingh14538@gmail.com</a>
          </div>
          <div>
            <strong>Phone:</strong> <a href="tel:9368577289">9368577289</a>
          </div>
          <div>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/vivek-s-b7960a219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              vivek-singh-b7960a219
            </a>
          </div>
          <div>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/viveksingh2310"
              target="_blank"
              rel="noopener noreferrer"
            >
              viveksingh2310
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
