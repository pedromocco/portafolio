import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const ProjectCard = ({ name, description, image, codeLink, demoLink }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="bg-black/30 flex justify-between gap-6 m-3 border border-gray-200 rounded-lg shadow-sm p-4 hover:scale-105 transform transition ease-in-out">
        <h3 className="text-xl font-bold">{name}</h3>
        <Button.Group>
          <Button color="dark" onClick={() => setOpenModal(true)}>
            Ver más
          </Button>
          <Button
            color="blue"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </Button>
        </Button.Group>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img
              src={image}
              alt={name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            href={codeLink}
            color="dark"
            outline="false"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Button>
          <Button
            color="blue"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;