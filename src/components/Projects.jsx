import React from "react";
import ProjectCard from "./Project";

const projects = [
  {
    name: "PDFgram",
    description:
      "permite a los usuarios llenar un formulario en el frontend, enviar los datos al backend para su procesamiento, generar un archivo PDF con los datos organizados en una tabla, y finalmente entregar el archivo PDF mediante un bot de Telegram.",
    image: "../../public/profile.jpg",
    codeLink: "https://github.com/pedromocco/PDFgram",
    demoLink: "",
  },
  {
    name: "Acortador",
    description: "",
    image: "../../public/profile.jpg",
    codeLink: "https://github.com/pedromocco/PDFgram",
    demoLink: "",
  },
  {
    name: "Vera-01",
    description:
      "Este proyecto presenta un sintetizador de mono-oscilador desarrollado con React.js y Tone.js. La aplicación permite a los usuarios manipular varios parámetros de sonido, como el envelope, el reverb y el delay, además de seleccionar entre diferentes tipos de ondas.",
    image: "../../public/profile.jpg",
    codeLink: "https://github.com/pedromocco/vera-01",
    demoLink: "https://vera-01.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
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
