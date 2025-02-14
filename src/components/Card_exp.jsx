import React from "react";

export const Card_exp = () => {
  return (
    <div className=" text-center">
      <div className=" shadow-xl rounded-2xl bg-white ">
        <div className="w-full">
          <img
            className="w-full  h-[300px] "
            src="exp_grupales_1.png"
            alt="Experiencias grupales africa"
          />
          <p className=" bg-[#cf9a46]  text-white font-bold">ÚLTIMOS CUPOS!</p>
        </div>
        <div className="h-full flex flex-col py-5 gap-3 z-10 ">
          <h3>SAFARI (ÁFRICA)</h3>
          <h4>5 AL 15 DE ABRIL | DESDE 5.500 USD</h4>
          <p>
            Serengueti, viaje en globo, hotel todo incluido 4 estrellas. Vive la
            experiencia de conocer los 4 reyes de la sabana africana.
          </p>
        </div>
      </div>
      <div className="bg-[#cf9a46] -top-3 py-4 pt-7  rounded-b-2xl -z-10 relative text-white font-bold underline  ">
        <p>MÁS INFORMACIÓN</p>
      </div>
    </div>
  );
};
