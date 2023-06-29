import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <a
          style={{ color: "#000000" }}
          href="https://github.com/BanditHeelerPDX"
        >
          Github
        </a>
        <a style={{ color: "#000000" }} href="https://www.linkedin.com/in/">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
