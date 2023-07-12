import React from "react";
import { useParams } from "react-router-dom";
import { NavigationBar } from "../components/NavigationBar";
import { heroes } from "../Data/heroes";

import SpiderMan from "../../assets/imagenes/Spiderman.png";

export const Detail = () => {
  const { id } = useParams();

  const personaje = heroes.filter((heroe) => heroe.id === id);

  return (
    <>
      <NavigationBar />
      {personaje.map((elemento) => (
        <div className=" text-gray-600 w-full bg-gradient-to-t from-white to-slate-100 min-h-screen grid grid-cols-12 gap-10">
          <div className="col-start-2 col-span-4 mt-10 h-20">
            <img
              src={elemento.img}
              className="min-w-full hover:scale-110 transition ease-in-out duration-300"
            />
          </div>
          <div className="w-full mt-20 col-span-4">
            <h1 className=" text-6xl font-bold  text-center text-red-700 ">
              {elemento.superhero}
            </h1>
            <div className="flex gap-2 mt-2 text-center  col-span-4 justify-center">
              <span className="font-semibold">Nombre real</span>
              <p className="font-light">{elemento.alter_ego}</p>
            </div>
            <div className="flex gap-2 mt-2 text-center  col-span-4 justify-center">
              <span className="font-semibold">Primera Aparición</span>
              <p className="font-light">{elemento.first_appearance}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
