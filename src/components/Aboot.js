import React from "react";
import image from "../assets/images/viking-me.jpg";

const Aboot = () => {
  return (
    <section id="aboot">
      <div className="aboot-content">
        <img
          src={image}
          alt="A portrait of the developer as an aging father."
        />
        <p>
          Born in Colorado, raised across the US by popular culture and some
          culture a little less than popular. Partner, Father, Athlete,
          Developer, Outdoorsman; equally aware of how much I know and how much
          I still have left to learn.
        </p>
      </div>
    </section>
  );
};

export default Aboot;
