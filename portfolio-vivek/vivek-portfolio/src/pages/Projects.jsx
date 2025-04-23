import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './pages.css';

function Projects() {
  const projects = [
    {
      title: "ECOM-API",
      description: "API built using NodeJS, Express, JavaScript, integrated with MongoDB for backend logic.",
      tech: "NodeJS, Express, JavaScript, MongoDB",
      link: "https://github.com/viveksingh2310/ecom-api"
    },
    {
      title: "POSTWAY API",
      description: "A backend application API.",
      tech: "NodeJS, Express, JavaScript, MongoDB",
      link: "https://github.com/viveksingh2310/postway-api"
    },
    {
      title: "Typing Racer Test Application",
      description: "A web application to test and improve typing speed.",
      tech: "JavaScript, React",
      link: "https://github.com/viveksingh2310/typing-racer"
    },
    {
      title: "Movie Recommendation System",
      description: "A recommendation system built in Python.",
      tech: "Python",
      link: "https://github.com/viveksingh2310/Movie-Recommendation_System"
    },
    {
      title: "Suvidha Foundation Website",
      description: "Redesigned the organization website using Bootstrap and NodeJS, added user authentication, improved backend operations. Increased web traffic by 20%.",
      tech: "Bootstrap, NodeJS, JavaScript, MongoDB",
      link: "https://github.com/viveksingh2310/suvidha-foundation-website"
    }
  ];

  return (
    <section className="section">
      <h2>Projects & Experience</h2>
      <div className="projects-container">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
      
      <h3>Internships & Roles</h3>
      <div className="internships-section">
        <div className="internship-card">
          <strong>Suvidha Foundation (NGO) | Human Resource Intern</strong> 
          <span>(June 2024 - Aug 2024)</span>
          <ul>
            <li>Onboarded and interviewed a group of interns from diverse fields.</li>
            <li>Learnt project management, team building, and worked as a graphic designer.</li>
          </ul>
        </div>
        
        <div className="internship-card">
          <strong>Suvidha Foundation (NGO) | Web Developer Intern</strong> 
          <span>(Oct 2023 - Nov 2023)</span>
          <ul>
            <li>Redesigned the organization's website, implemented user authentication, improved backend operations.</li>
            <li>Increased web traffic by 20%.</li>
          </ul>
        </div>
        
        <div className="internship-card">
          <strong>Humari Pehchan NGO | Operations Manager</strong> 
          <span>(July 2022 - Aug 2022)</span>
          <ul>
            <li>Led a team of 5 people from different domains, learnt fundamentals of operations management.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
