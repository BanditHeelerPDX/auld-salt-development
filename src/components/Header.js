import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeSection, setActiveSection] = React.useState("home");

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  return (
    <header>
      <div className="header-content">
        <h1>BanditHeelerPDX</h1>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={activeSection === "aboot" ? "active" : ""}
                onClick={() => handleSetActiveSection("aboot")}
              >
                Aboot Me
              </Link>
            </li>
            <li>
              <Link
                to="/taboot"
                className={activeSection === "taboot" ? "active" : ""}
                onClick={() => handleSetActiveSection("taboot")}
              >
                Me Taboot
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => handleSetActiveSection("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
