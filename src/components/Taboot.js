import React from "react";
import Project from "./Project";

const Taboot = () => {
    const taboots = [
        {
            title: "Read My Node",
            imgSrc: "../assets/images/read-my-node-scrsht.png",
            depLink: "CLI readme generator - not deployed",
            gitLink: "https://github.com/BanditHeelerPDX/read-my-node",
        },
        {
            title: "Gist - Regex Ain't No Basic Ex",
            imgSrc: "../assets/images/gist-scrsht.png",
            depLink: "https://gist.github.com/BanditHeelerPDX/65848874a709ed3ebd4a04bb0e7c931e",
            gitLink: "No repo, just the gist, ma'am.",
        },
        {
            title: "Babycorp Employee Database",
            imgSrc: "../assets/images/babycorp-db-scrsht.png",
            depLink: "https://drive.google.com/file/d/1htoKC-G1Ggu3NJ6NoRy3-OrBXzjQZeZS/view",
            gitLink: "https://github.com/BanditHeelerPDX/babycorp_employee_database",
        },
        {
            title: "Taboot 4",
            imgSrc: "path/to/image4",
            depLink: "deployed link4",
            gitLink: "github link4",
        },
        {
            title: "Taboot 5",
            imgSrc: "path/to/image5",
            depLink: "deployed link5",
            gitLink: "github link5",
        },
        {
            title: "Taboot 6",
            imgSrc: "path/to/image6",
            depLink: "deployed link6",
            gitLink: "github link6",
        },
    ];

    return (
        <section id="taboot">
            <div className="taboot-content">
                <h3>Me Taboot</h3>
                <div className="taboots-container">
                    {taboots.map((taboot, index) => (
                        <Project
                            key={index}
                            title={taboot.title}
                            imgSrc={taboot.imgSrc}
                            depLink={taboot.depLink}
                            gitLink={taboot.gitLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Taboot;