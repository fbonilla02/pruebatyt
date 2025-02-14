import React from "react";

export const Newsletter = () => {
  return (
    <div className="bg-[#1a213b]  py-10 text-white  flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 h-full  px-10 md:w-1/2">
        <h6 className="text-center">
          Suscríbete a nuestro newsletter y recibe noticias, descuentos y más
        </h6>

        <input
          className="bg-white h-10 rounded-lg px-4 w-full text-gray-500"
          type="text"
          placeholder="Correo electrónico"
        />
        <button className="bg-[#cf9a46] px-8 py-2 font-bold rounded-lg">
          SUSCRIBIRME
        </button>
      </div>
    </div>
  );
};
