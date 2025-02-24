import { Badge, Button, Tooltip } from "flowbite-react";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-center md:text-left gap-5 mt-14 items-center md:items-start">
        <img
          className="w-[200px] h-[200px] object-cover rounded-full border-10 border-gray-100 shadow-lg"
          src="profile.png"
          alt=""
        />

        <div>
          <h1 className="text-5xl font-bold mb-3 text-black">
            Fullstack Developer Junior
          </h1>
          <div className="flex gap-4 justify-center md:justify-start">
            <h2 className="text-2xl font-semibold">Pedro Moccó</h2>
            <Badge
              size="sm"
              color="success"
              className="inline-block rounded-full mt-2"
            >
              Disponible para trabajar
            </Badge>
          </div>
          <p className="mt-2">
            3 años de experiencia en desarrollo web. Productivo y emocionado
            diariamente por aprender y trabajar.
          </p>
          <div className="flex justify-center md:justify-start gap-2 mt-3">
            <Tooltip content="github.com/pedromoco">
              <Button pill size="xs" color="dark" href="https://github.com/pedromocco/" target="_blank" rel="noopener noreferrer">
                Github
              </Button>
            </Tooltip>
            <Tooltip content="linkedin.com/pedromoco">
              <Button pill size="xs" color="blue" href="https://www.linkedin.com/in/pedromocco/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Button>
            </Tooltip>
            <Tooltip content="pedromocco00@gmail.com">
              <Button pill size="xs" color="failure" href="mailto:pedromocco00@gmail.com" target="_blank" rel="noopener noreferrer">
                Correo
              </Button>
            </Tooltip>
            <Button pill size="xs" color="warning">
              Cv
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
