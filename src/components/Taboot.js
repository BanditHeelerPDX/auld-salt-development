import React from "react";
import Project from "./Project";

const Taboot = () => {
    const taboots = [
        {
            title: "Taboot 1",
            imgSrc: "path/to/image1",
            depLink: "deployed link1",
            gitLink: "github link1",
        },
        {
            title: "Taboot 2",
            imgSrc: "path/to/image2",
            depLink: "deployed link2",
            gitLink: "github link2",
        },
        {
            title: "Taboot 3",
            imgSrc: "path/to/image3",
            depLink: "deployed link3",
            gitLink: "github link3",
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