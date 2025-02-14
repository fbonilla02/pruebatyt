import React from "react";

export const DesignViaje = () => {
  return (
    <section className="py-10 px-10 md:px-32 bg-[#e5e5e5]">
      <h2 className="text-center text-4xl font-bold tracking-[15px] text-[#cf9a46]">
        DISEÑA TU VIAJE
      </h2>
      <div className="py-10">
        <h6>AQUÍ COMIENZA TU EXPERIENCIA</h6>
        <p>
          Una vez llenado este formulario, uno de nuestros planners travelers se
          pondra en contacto contigo para perfeccionar ese viaje que tanto has
          soñado. Estamos aquí para brindarte la mejor experiencia.
        </p>
      </div>
      <form action="">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="w-full flex flex-col gap-2">
            <label className="text-center " htmlFor="">
              ¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?
            </label>
            <select
              className="w-full bg-white h-10 rounded-lg"
              name="destino"
              id="destino1"
            >
              <option value="Colombia">Colombia</option>
              <option value="Mexico">Mexico</option>
              <option value="Peru">Perú</option>
            </select>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-center " htmlFor="">
              ¿QUÉ OTRO DESTINO TIENES EN MENTE?
            </label>
            <select
              className="w-full bg-white h-10 rounded-lg"
              name="destino"
              id="destino1"
            >
              <option value="Colombia">Colombia</option>
              <option value="Mexico">Mexico</option>
              <option value="Peru">Perú</option>
            </select>
          </div>
        </div>
        <div></div>
      </form>
    </section>
  );
};
