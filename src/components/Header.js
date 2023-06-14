import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentSection, setCurrentSection] = React.useState("home");

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <header>
      <div className="header-content">
        <h1>BanditHeelerPDX</h1>
        <nav>
          <ul>
            <li>
              <Link
                to="/home"
                className={currentSection === "home" ? "active" : ""}
                onClick={() => handleSectionChange("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboot"
                className={currentSection === "aboot" ? "active" : ""}
                onClick={() => handleSectionChange("aboot")}
              >
                Aboot Me
              </Link>
            </li>
            <li>
              <Link
                to="/taboot"
                className={currentSection === "taboot" ? "active" : ""}
                onClick={() => handleSectionChange("taboot")}
              >
                Me Taboot
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={currentSection === "contact" ? "active" : ""}
                onClick={() => handleSectionChange("contact")}
              >
                Contact
              </Link>
            </li>
            <li>
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
