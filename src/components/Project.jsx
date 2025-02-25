import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const ProjectCard = ({ name, description, image, codeLink, demoLink }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="flex justify-between gap-6 m-3 border border-gray-200 rounded-lg shadow-sm p-4 hover:scale-105 transform transition ease-in-out">
        <h3 className="text-xl font-bold">{name}</h3>
        <Button.Group>
          <Button color="dark" onClick={() => setOpenModal(true)}>Ver más</Button>
          <Button color="blue" href={demoLink}>Demo</Button>
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
          <Button href={codeLink} color="dark" outline="false">
            Github
          </Button>
          <Button color="blue" href={demoLink}>
            Demo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;

{
  /* <div
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
    </div> */
}
