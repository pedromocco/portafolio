const Skills = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Habilidades</h2>

        <div className="mb-12 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Habilidades Técnicas:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2 flex items-center underline">
                Lenguajes
              </h4>
              <ul className="">
                <li className="flex items-center">
                  HTML5
                </li>
                <li className="flex items-center">
                  CSS
                </li>
                <li className="flex items-center">
                  Javascript
                </li>
                <li className="flex items-center">
                  SQL
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2 flex items-center underline">
                Frameworks
              </h4>
              <ul className="">
                <li className="flex items-center">
                  React
                </li>
                <li className="flex items-center">
                  Next.js
                </li>
                <li className="flex items-center">
                  Node.js
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2 flex items-center underline">
                Herramientas
              </h4>
              <ul className="">
                <li className="flex items-center">
                  Git
                </li>
                <li className="flex items-center">
                  Visual Studio Code
                </li>
                <li className="flex items-center">
                  Figma
                </li>
                <li className="flex items-center">
                  Photoshop
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            Habilidades Blandas:
          </h3>
          <ul className="">
            <li className="flex items-center">
              Manejo de estrés alto
            </li>
            <li className="flex items-center">
              Trabajo en equipo
            </li>
            <li className="flex items-center">
              Capacidad de tolerar cambios
            </li>
            <li className="flex items-center">
              Actitud resolutiva
            </li>
            <li className="flex items-center">
              Aprendizaje progresivo
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;