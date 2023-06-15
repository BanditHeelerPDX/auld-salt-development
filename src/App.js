import React, { useState } from "react";
import Aboot from "./components/Aboot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Taboot from "./components/Taboot";

function App() {
  const [currentSection, handleSectionChange] = useState("home");

  const renderSection = () => {
    if (currentSection === "home") {
      return <Home />;
    }
    if (currentSection === "aboot") {
      return <Aboot />;
    }
    if (currentSection === "taboot") {
      return <Taboot />;
    }
    if (currentSection === "contact") {
      return <Contact />;
    }
    if (currentSection === "resume") {
      return <Resume />;
    }
  };

  return (
    <>
    <Header
      currentSection={currentSection}
      handleSectionChange={handleSectionChange}>
        </Header>
        <main>{renderSection()}</main>
        <Footer></Footer>
        </>
  );
}

    export default App;