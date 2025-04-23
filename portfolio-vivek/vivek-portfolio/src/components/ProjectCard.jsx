import React from 'react';

function ProjectCard({ title, description, tech, link }) {
  const cardContent = (
    <div className="project-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      {tech && <p><strong>Tech:</strong> {tech}</p>}
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card clickable"
      tabIndex={0}
    >
      {cardContent}
    </a>
  ) : (
    <div className="project-card">{cardContent}</div>
  );
}

export default ProjectCard;
