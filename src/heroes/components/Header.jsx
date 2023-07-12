import React, { useState } from "react";
import spidermanImagen from "../../assets/imagenes/Spiderman.png";
import { GridCards } from "./GridCards";

export const Header = ({ publisher }) => {
  const [Form, setform] = useState("");

  const HandleForm = ({ target }) => {
    setform(target.value);
  };

  return (
    <>
      <div className=" w-full bg-gradient-to-t from-red-950 to-red-900 min-h-screen grid grid-cols-12 gap-10">
        <div id="imagen" className="col-start-2 col-span-5">
          <img src={spidermanImagen} alt="" className="min-w-full" />
        </div>
        <div id="formularioDc" className="col-span-5 mt-20">
          <h1 className="text-4xl text-white font-bold">
            ¡BUSCA TU PERSONAJE MARVEL!
          </h1>
          <form>
            <input
              onChange={HandleForm}
              type="text"
              className="p-2 w-full mt-3 focus:outline-none text-white bg-transparent border-b-2 border-red-500"
              placeholder="Tu personaje aquí"
            />
          </form>
          <GridCards publisher={publisher} hero={Form} />
        </div>
      </div>
    </>
  );
};
