import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const technicalSkills = [
    { name: "Bootstrap", proficiency: 82 },
    { name: "JavaScript", proficiency: 85 },
    { name: "Python", proficiency: 78 },
    { name: "Java", proficiency: 70 },
    { name: "Express", proficiency: 80 },
    { name: "MongoDB", proficiency: 83 },
    { name: "NodeJS", proficiency: 86 }
  ];

  const interpersonalSkills = [
    { 
      name: "Team Leadership", 
      icon: "👥",
      bgImage: "leadership.jpg",
      description: "Led multiple project teams across different domains"
    },
    { 
      name: "Management & Coordination", 
      icon: "📊",
      bgImage: "management.jpg",
      description: "Coordinated operations in NGO environments"
    },
    { 
      name: "Critical Thinking", 
      icon: "🧠",
      bgImage: "thinking.jpg",
      description: "Problem-solving approach to complex challenges"
    }
  ];

  const certifications = [
    {
      name: "MERN Stack Online Course - Coding Ninjas",
      link: "https://ninjasfiles.s3.amazonaws.com/certificate3225179b1cd4da32f6ebee3459f3d978e84bc3d.pdf"
    },
    {
      name: "Programming Fundamentals in Java - Udemy",
      link: "https://www.udemy.com/certificate/UC-311b2a86-0bfd-4a8c-9118-6917bb74ce85/"
    },
    {
      name: "C Sharp Programming Certificate",
      link: "https://drive.google.com/file/d/19v6ZFATrXC8GVKfNhvsaoNKzSCkPgpVJ/view?usp=sharing"
    },
    {
      name: "Java Programming with MySQL - Brilliant Makers",
      link: "https://brilliantmakers.org/certificate/your-certificate-id/"
    },
    {
        name: "ReactJS Certificate - Infosys Learning",
        link: "https://drive.google.com/file/d/13Yx2m3kRHXrx2fPqC2HlAWItfKIkJO3G/view?usp=sharing"
      }
  ];

  const handleMouseEnter = (skillName) => {
    setHoveredSkill(skillName);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section className="section skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-graph">
        {technicalSkills.map((skill) => (
          <div 
            className="skill-bar-container" 
            key={skill.name}
            onMouseEnter={() => handleMouseEnter(skill.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-wrapper">
              <div 
                className={`skill-bar ${hoveredSkill === skill.name ? 'hovered' : ''}`}
                style={{ 
                  width: `${skill.proficiency}%`,
                  backgroundColor: hoveredSkill === skill.name ? 
                    `hsl(${Math.min(skill.proficiency * 1.2, 200)}, 80%, 45%)` : '#3d5a80'
                }}
              >
                {hoveredSkill === skill.name && (
                  <span className="proficiency-label">{skill.proficiency}%</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>Interpersonal Skills</h3>
      <div className="interpersonal-skills">
        {interpersonalSkills.map((skill) => (
          <div className="interpersonal-skill" key={skill.name}>
            <div 
              className="skill-bg" 
              style={{ backgroundImage: `url(/src/assets/${skill.bgImage})` }}
            >
              <div className="skill-overlay">
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>Certifications & Awards</h3>
      <div className="skills-list certification-list">
        {certifications.map((cert, index) => (
          <a 
            key={index}
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="certificate-link"
          >
            {cert.name}
          </a>
        ))}
      </div>

      <h3>Co-curricular Achievements</h3>
      <ul className="skills-list">
        <li>Organized farewell parties and various events at college</li>
        <li>Member of Rotaract Club for social welfare activities</li>
      </ul>

      <h3>Interests & Hobbies</h3>
      <ul className="skills-list">
        <li>Reading</li>
        <li>Travelling</li>
        <li>Cooking</li>
        <li>Geopolitics</li>
      </ul>
    </section>
  );
}

export default Skills;
