import React from "react";

const Resume = () => {
  return (
    <section id="resume">
      <div className="resume-content">
        <h3>Resume</h3>
        <p>
          I have worked every position in a restaurant from dishwasher to
          general manager. I worked as a research analyst for the attorney who
          took down big tobacco. I built a quality control and inventory
          management system from the ground up for Audix USA, producer of
          microphones for every room from the boardroom to concert halls. I
          inspected titanium-cast aircraft and military components for Precision
          Castparts. Now I am aiming to become a web-developer for a socially
          conscious company that is actively working to make the world a better
          place for all.
        </p>
        <a href="resume-link" download>
          Resume Download
        </a>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
