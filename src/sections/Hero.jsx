import { Viajes } from "../components/Viajes";

export const Hero = () => {
  return (
    <section>
      <div className="h-screen w-full relative ">
        <img className="h-full object-cover" src="header.png" alt="" />
        <div className="absolute bottom-0 w-full h-full md:flex md:flex-col md:justify-end md:gap-20 md:pb-20">
          <h1 className="h-full w-full md:h-0 flex justify-center items-center flex-col text-6xl gap-5 font-bold text-white md:tracking-[25px]">
            THE TRAVEL
            <span className="text-3xl text-[#cf9a46]">EXPERIENCE</span>
          </h1>
          <div className=" flex flex-col md:flex-row items-center justify-center">
            <Viajes img="viajes_grupales.png" text="Viajes grupales" />
            <Viajes img="viajes_a_la_medida.png" text="Viajes a la medida" />
            <Viajes
              img="destinos_para_parejas.png"
              text="Destinos para parejas"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
