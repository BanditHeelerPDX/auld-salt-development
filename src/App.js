import React, { useState } from "react";
import Aboot from "./components/Aboot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Taboot from "./components/Taboot";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
    <Header
         activeSection={currentSection}
         setActiveSection={handleSectionChange}
       />
    {currentSection === "home" && <Home />}
    {currentSection === "aboot" && <Aboot />}
    {currentSection === "contact" && <Contact />}
    {currentSection === "taboot" && <Taboot />}
    {currentSection === "resume" && <Resume />}
    <Footer />
    </>
    );
    }
    
    export default App;