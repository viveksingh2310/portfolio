import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home-hero">
      <div className="home-profile">
        <img
          src="/profile.jpg"
          alt="Vivek Singh"
          className="home-avatar"
        />
        <div className="home-intro">
          <h1>
            Hi, I'm <span className="home-highlight">Vivek Singh</span>
          </h1>
          <h2 className="home-role">
            MERN Stack Developer &amp; Problem Solver
          </h2>
          <p className="home-summary">
            I’m a passionate developer and keen learner, motivated to solve real-world problems using my MERN stack skills. I enjoy building elegant, efficient solutions and collaborating with others to create meaningful impact.
          </p>
          <div className="home-actions">
            <a
              href="mailto:viveksingh14538@gmail.com"
              className="home-btn primary"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/viveksingh2310"
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn secondary"
            >
              View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-s-b7960a219/"
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
