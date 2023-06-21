import React from "react";
import image from "../assets/images/viking-me.jpg";

const Aboot = () => {
  return (
    <section id="aboot" className="my-6">
      <div className="flex-row">
        <h2 className="title prime-border" id="aboot-me">
          Aboot Me, eh
        </h2>
      </div>
      <div className="flex-row">
        <div className="aboot-content">
          <div className="aboot-img">
            <img
              src={image}
              alt="A portrait of the developer as an aging father."
            />
          </div>
          <p>
            Born in Colorado, raised across the US by popular culture and some
            culture a little less than popular. Partner, Father, Athlete,
            Developer, Outdoorsman; equally aware of how much I know and how
            much I still have left to learn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboot;
