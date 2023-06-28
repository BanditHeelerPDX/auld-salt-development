import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { currentSection, handleSectionChange } = props;

  return (
    <header>
      <div className="header-content">
        <h1 style={{ marginLeft: "16%", color: "#000000" }}>BanditHeelerPDX</h1>
        <nav>
          <ul
            style={{
              display: "flex",
              float: "right",
              marginRight: "20%",
              margin: "0",
              padding: "0",
              listStyle: "none",
            }}
          >
            <li style={{ marginRight: "1rem" }}>
              <Link
                to="/home"
                className={currentSection === "home" ? "active" : ""}
                onClick={() => handleSectionChange("home")}
              >
                Home
              </Link>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <Link
                to="/aboot"
                className={currentSection === "aboot" ? "active" : ""}
                onClick={() => handleSectionChange("aboot")}
              >
                Aboot Me
              </Link>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <Link
                to="/taboot"
                className={currentSection === "taboot" ? "active" : ""}
                onClick={() => handleSectionChange("taboot")}
              >
                Me Taboot
              </Link>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <Link
                to="/contact"
                className={currentSection === "contact" ? "active" : ""}
                onClick={() => handleSectionChange("contact")}
              >
                Contact
              </Link>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <Link
                to="/resume"
                className={currentSection === "resume" ? "active" : ""}
                onClick={() => handleSectionChange("resume")}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
