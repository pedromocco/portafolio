import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faDatabase, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import {
  faNode,
  faFigma,
  faWindows,
  faGit,
  faReact,
  faJs,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8 mt-8">
          <h2 className="text-3xl font-bold">Habilidades</h2>
          <FontAwesomeIcon icon={faDesktop} size="2x" className="ml-3" />
        </div>
        <div className="mb-12 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Habilidades Técnicas:</h3>
          <div className="grid grid-cols-1 justify-center md:grid-cols-3 gap-6">
            <div className="bg-black/30 border p-4 rounded-lg hover:scale-105 transform transition ease-in-out">
              <h4 className="text-lg font-medium mb-2 flex items-center underline">
                Lenguajes
              </h4>
              <ul className="">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faHtml5} className="mr-2" />
                  HTML5
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCss3} className="mr-2" />
                  CSS
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faJs} className="mr-2" />
                  Javascript
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faDatabase} className="mr-2" />
                  SQL
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border p-4 rounded-lg hover:scale-105 transform transition ease-in-out">
              <h4 className="text-lg font-medium mb-2 flex items-center underline">
                Frameworks
              </h4>
              <ul className="">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faReact} className="mr-2" />
                  React
                </li>
                <li className="flex items-center">Next.js</li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faNode} className="mr-2" />
                  Node.js
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border p-4 rounded-lg hover:scale-105 transform transition ease-in-out">
              <h4 className="text-lg font-medium mb-2 flex items-center underline">
                Herramientas
              </h4>
              <ul className="">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faGit} className="mr-2" />
                  Git
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faWindows} className="mr-2" />
                  Visual Studio Code
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faFigma} className="mr-2" />
                  Figma
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faPhotoFilm} className="mr-2" />
                  Photoshop
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" p-6 rounded-lg mb-12 ">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            Habilidades Blandas:
          </h3>
          <ul className="bg-black/30 border p-4 rounded-lg list-disc list-inside hover:scale-105 transform transition ease-in-out">
            <li>Manejo de estrés alto</li>
            <li>Trabajo en equipo</li>
            <li>Capacidad de tolerar cambios</li>
            <li>Actitud resolutiva</li>
            <li>Aprendizaje progresivo</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
