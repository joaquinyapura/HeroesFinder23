import { NavLink } from "react-router-dom";
import ImagenSpiderman from "../../assets/imagenes/Spiderman.png";
import { GetHeroesByPublisher } from "../helpers/GetHeroByPublisher";

export const GridCards = ({ publisher, hero }) => {
  const heroes = GetHeroesByPublisher(publisher);

  const heroeFiltrado = Object.values(heroes).filter((heroe) =>
    heroe.superhero.includes(hero)
  );

  return (
    <>
      <div id="grid" className="grid grid-cols-3 gap-3 mt-10">
        {heroeFiltrado.map((element) => (
          <NavLink to={`/personaje/${element.id}`} key={element.id}>
            <div className="card bg-white/10 flex flex-col aspect-square rounded-xl  text-center hover:bg-white/30 transition ease-in-out duration-300 place-content-stretch">
              <div className=" mx-auto mt-2 py-2 aspect-square overflow-hidden">
                <img src={element.img} />
              </div>
              <h3 className="text-white text-lg">{element.superhero}</h3>
              <p className="text-yellow-50">{element.publisher}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
