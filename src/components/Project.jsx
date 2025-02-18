import { Button } from "flowbite-react";

const ProjectCard = ({ name, description, image, codeLink, demoLink }) => {
    return (
      <div className="mb-15">
        <div className="flex gap-6 justify-center items-center">
          <div>
            <img
              src={image}
              alt={`${name} Image`}
              className="w-90 h-60 object-cover rounded-md"
            />
          </div>
  
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="mt-2">{description}</p>
  
            <div className="flex mt-4 space-x-4">
            <Button href={codeLink} target="_blank">Code</Button>
            <Button href={demoLink} target="_blank">Demo</Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;

