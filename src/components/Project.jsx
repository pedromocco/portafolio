import { Button } from "flowbite-react";


const ProjectCard = ({ name, description, image, codeLink, demoLink }) => {
  return (
    <div
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-full mb-8"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-[300px] md:w-full md:rounded-none md:rounded-s-lg md:justify-start object-contain"
        src={image}
        alt=""
      />
      <div className="grid justify-between p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 md:text-sm">
          {description}
        </p>
        <Button.Group className="justify-end">
          <Button href={codeLink}>Repositorio</Button>
          <Button href={demoLink}>Demostración</Button>
        </Button.Group>
      </div>
    </div>
  );
};

export default ProjectCard;
