import React from "react";

const Project = ({ title, imgSrc, depLink, gitLink }) => {
  return (
    <section id="project">
      <div className="project-content">
        <img style={{ width: "80%" }} src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <div className="project-links">
          <a href={depLink} target="_blank" rel="noreferrer">
            Deployed App
          </a>
          <a href={gitLink} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
