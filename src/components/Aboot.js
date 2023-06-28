import React from "react";
import image from "../assets/images/viking-me.jpg";

const Aboot = () => {
  return (
    <section id="aboot" className="my-6 container">
      <div className="row justify-content-center">
        <h2 className="title prime-border col-8" id="aboot-me">
          Aboot Me, eh
        </h2>
      </div>
      <div className="row justify-content-center">
        <div
          className="aboot-content col-8"
          style={{ maxWidth: "100%", overflow: "hidden" }}
        >
          <div
            className="aboot-img"
            style={{
              maxWidth: "50%",
              float: "right",
              animation: "spin 1s linear",
            }}
          >
            <img
              src={image}
              alt="A portrait of the developer as an aging father."
              style={{
                maxWidth: "30%",
                borderRadius: "8px",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <p>
            Born in Colorado, raised across the US by popular culture and some
            culture a little less than popular. Partner, Father, Athlete,
            Developer, Outdoorsman; equally aware of how much I know and how
            much I have left to learn.
          </p>
        </div>
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Aboot;
