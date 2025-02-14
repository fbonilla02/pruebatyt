import React from "react";
import { Card_exp } from "../components/Card_exp";
import { useFetch } from "../hooks/useFetch";

export const Experiencias = () => {
  const travels = useFetch("get-travels/");
  const customExp = useFetch("get-customer_experiences/ ");
  return (
    <>
      <section className="py-10">
        <h2 className="py-10 text-center md:text-4xl text-2xl font-bold tracking-[15px] text-[#cf9a46]">
          EXPERIENCIAS GRUPALES
        </h2>
        <div className="grid  md:grid-cols-3 gap-10 mx-10 md:mx-32">
          {travels.map((travel) => (
            <React.Fragment key={travel.id}>
              <Card_exp
                title={travel.title}
                img={travel.image_cover}
                status={travel.status.title}
                color={travel.status.color}
                desc={travel.description}
                cost={travel.cost}
                init={travel.date_start}
                end={travel.date_end}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
      {customExp.map((custom) => (
        <section key={custom.id} className="py-10">
          <h2 className="text-center md:text-4xl text-2xl font-bold md:tracking-[15px] tracking-[10px] text-[#cf9a46]">
            {custom.title}
          </h2>

          <div className="flex flex-col py-10 md:flex-row items-center">
            <img
              className="px-10"
              src={`https://api.test.interactiva.net.co${custom.image}`}
              alt="imagen experiencias personalizadas"
            />
            <div className="px-10 flex pt-10 flex-col gap-5">
              <h3 className="font-bold">{custom.description}</h3>
              <p>{custom.diference_description}</p>
              <button className="w-fit bg-[#cf9a46] rounded-lg text-white px-10 py-3 font-bold text-center">
                COTIZAR MI VIAJE
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
