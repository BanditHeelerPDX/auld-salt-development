import React from "react";

const Resume = () => {
  return (
    <section id="resume">
      <div className="resume-content">
        <h3 style={{ marginLeft: "20%", color: "#33202A" }}>Resume</h3>
        <div className="row justify-content-center">
          <p
            style={{
              width: "66%",
              display: "flex",
              justifyContent: "center",
              color: "#5F5566",
            }}
          >
            I have worked every position in a restaurant from dishwasher to
            general manager. I worked as a research analyst for the attorney who
            took down big tobacco. I built a quality control and inventory
            management system from the ground up for Audix USA, producer of
            microphones for every room from the boardroom to concert halls. I
            inspected titanium-cast aircraft and military components for
            Precision Castparts. Now I am aiming to become a web-developer for a
            socially conscious company that is actively working to make the
            world a better place for all.
          </p>
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#000000",
            }}
            href="resume-link"
            download
          >
            Resume Download
          </a>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-between",
              marginTop: "7%",
            }}
          >
            <li style={{ marginLeft: "5%" }}>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li style={{ marginRight: "5%" }}>GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
