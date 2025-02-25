import React from "react";
import ProjectCard from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "PDFgram",
    description:
      "Permite a los usuarios llenar un formulario en el frontend, enviar los datos al backend para su procesamiento, generar un archivo PDF con los datos organizados en una tabla, y finalmente entregar el archivo PDF mediante un bot de Telegram.",
    image: "pdfgram.webp",
    codeLink: "https://github.com/pedromocco/PDFGram-Nextjs",
    demoLink: "https://pdfgram.vercel.app/",
  },
  {
    name: "sqrt (URL Shortner)",
    description: "La aplicación permite a los usuarios acortar URLs largas en enlaces más cortos y manejables. Además, redirige automáticamente a los usuarios al sitio original cuando acceden al enlace acortado.",
    image: "shortener.webp",
    codeLink: "https://github.com/pedromocco/sqrt-urlShortner",
    demoLink: "https://sqrt-nine.vercel.app/",
  },
  {
    name: "Vera-01",
    description:
      "Presenta un sintetizador de mono-oscilador desarrollado con React.js y Tone.js. La aplicación permite a los usuarios manipular varios parámetros de sonido, como el envelope, el reverb y el delay, además de seleccionar entre diferentes tipos de ondas.",
    image: "vera-01.webp",
    codeLink: "https://github.com/pedromocco/vera-01",
    demoLink: "https://vera-01.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="container justify-center mx-auto p-3">
      <div className="flex items-center mb-8 mt-8">
      <h2 className="text-3xl font-bold">Proyectos</h2>
    <FontAwesomeIcon icon={faBriefcase} size="2x" className="ml-3"/>
      </div>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          image={project.image}
          codeLink={project.codeLink}
          demoLink={project.demoLink}
          className="mb-7"
        />
      ))}
    </div>
  );
};

export default Projects;
