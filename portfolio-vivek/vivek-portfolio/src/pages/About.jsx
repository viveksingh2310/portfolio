import React from 'react';
import './pages.css';

function About() {
  return (
    <section className="about-main">
      <h2 className="about-title">About Me</h2>
      <div className="about-cards">

        {/* Contact Card */}
        <div className="about-card about-contact">
          <h3>Contact</h3>
          <ul>
            <li><strong>Address:</strong> Nirmal Block-A Lane No. 3 Visthapith Chetr Pashulok, Rishikesh</li>
            <li><strong>Email:</strong> <a href="mailto:viveksingh14538@gmail.com">viveksingh14538@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:9368577289">9368577289</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vivek-singh-b7960a219/" target="_blank" rel="noopener noreferrer">Profile</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/viveksingh2310" target="_blank" rel="noopener noreferrer">viveksingh2310</a></li>
          </ul>
        </div>

        {/* Summary Card */}
        <div className="about-card about-summary">
          <h3>Summary</h3>
          <p>
            A keen learner and problem solver with high motivation to learn and solve problems using my skillset in the MERN Stack.
          </p>
        </div>

        {/* Education Card */}
        <div className="about-card about-education">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>MCA (Cloud Computing and DevOps)</strong><br />
              Chandigarh University, Punjab (2024-2026, Ongoing) | 7.47 CGPA
            </li>
            <li>
              <strong>BCA</strong><br />
              Omkarananda Institute of Management and Technology, Rishikesh, Uttarakhand (2021-2024) | 7.20 CGPA
            </li>
            <li>
              <strong>Intermediate (CBSE)</strong><br />
              Kendriya Vidhyalaya, Rishikesh, Uttarakhand (2020-2021) | 76.8%
            </li>
          </ul>
        </div>

        {/* Technical Competencies Card */}
        <div className="about-card about-tech">
          <h3>Technical Competencies</h3>
          <div className="about-tags">
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Java</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>NodeJS</span>
          </div>
        </div>

        {/* Interpersonal Skills Card */}
        <div className="about-card about-interpersonal">
          <h3>Interpersonal Skills</h3>
          <div className="about-tags">
            <span>Team Leadership</span>
            <span>Management & Coordination</span>
            <span>Critical Thinking</span>
          </div>
        </div>

        {/* Interests & Hobbies Card */}
        <div className="about-card about-hobbies">
          <h3>Interests & Hobbies</h3>
          <div className="about-tags">
            <span>Reading</span>
            <span>Travelling</span>
            <span>Cooking</span>
            <span>Geopolitics</span>
          </div>
        </div>

        {/* Languages Card */}
        <div className="about-card about-languages">
          <h3>Languages Known</h3>
          <div className="about-tags">
            <span>English</span>
            <span>Hindi</span>
            <span>German (Beginner)</span>
          </div>
        </div>

        {/* Personal Details Card */}
        <div className="about-card about-personal">
          <h3>Personal Details</h3>
          <ul>
            <li>Mother's Name: Munni Devi</li>
            <li>Father's Name: Laxman Singh</li>
            <li>D.O.B.: 23/10/2003</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
