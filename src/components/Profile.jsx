import { Badge, Button, Tooltip } from "flowbite-react";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex gap-5 mt-14">
        <img
          className="w-[200px] h-[200px] object-cover rounded-full"
          src="../../public/profile.jpg"
          alt=""
        />

        <div>
          <h1 className="text-5xl font-bold mb-3 text-black">
            Fullstack Developer Junior
          </h1>
          <div className="flex gap-4">
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
          <div className="flex flex-wrap gap-2 mt-3">
            <Tooltip content="github.com/pedromoco">
              <Button pill size="xs" color="dark">
                Github
              </Button>
            </Tooltip>
            <Tooltip content="linkedin.com/pedromoco">
              <Button pill size="xs" color="blue">
                LinkedIn
              </Button>
            </Tooltip>
            <Tooltip content="pedromocco00@gmail.com">
              <Button pill size="xs" color="failure">
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
