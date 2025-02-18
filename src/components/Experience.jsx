const Experience = () => {
  const timelineItems = [
    {
      date: "Febrero 2025",
      stack: "Desarrollador Full Stack",
      title: "La marca C.A",
      description:
        "Diseño de aplicación para gestión de entrada de transacciones. Creación de servidor para la transformación de datos enviados desde el front-end a PDF. Integración de API de Telegram para envíos automáticos.",
      technologies: ["React", "Electron", "Node.js", "Express", "PDF-Lib", "Telegram API"],
    },
    {
      date: "Noviembre 2024",
      stack: "Desarrollador Full Stack",
      title: 'Colegio "Siglo XII"',
      description:
        "Creación de vista para consultar una tabla con asignaciones enviadas por alumnos. Manejo de datos enviados por los alumnos y consumo de endpoints.",
      technologies: ["React", "Node.js", "Axios", "REST API", "Bootstrap"],
    },
    {
      date: "Marzo 2023",
      stack: "Consultor SAP",
      title: "Pasantía",
      description:
        "Carga de datos automática, integración y visualización de datos provenientes de Excel. Consumo de API externa con datos cargados del Excel.",
      technologies: ["ABAP", "SAP", "Excel", "API REST"],
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8">Experiencias</h2>
      <div className="relative">
        <div className="absolute w-1 bg-black h-full left-6 top-0 rounded"></div>
        {timelineItems.map((item, index) => (
          <div key={index} className="flex flex-row items-start mb-8">
            <div className="relative">
              <div className="w-3 h-3 bg-black rounded-full mt-2 ml-6"></div>
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-semibold mb-2">{item.stack}</h3>
              <span className="font-semibold mb-2">{item.title}</span>
              <p className="text-sm mb-2">{item.date}</p>
              <p className=" mb-2">{item.description}</p>
              <div className=" mb-2">
                <p className="font-semibold mb-2">Tecnologías:</p>
                <span className="text-gray-600">{item.technologies.join(", ")}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;