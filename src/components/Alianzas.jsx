import React from "react";
import { useFetch } from "../hooks/useFetch";

export const Alianzas = () => {
  const partners = useFetch("get-partners/");
  return (
    <section className="py-10">
      <h2 className="text-center text-2xl md:text-4xl font-bold tracking-[15px] text-[#cf9a46]">
        ALIANZAS ESTRATÉGICAS
      </h2>
      <div className="flex flex-col md:flex-row w-full items-center justify-center py-5 gap-5">
        {partners.map((partner) => (
          <div key={partner.id}>
            <img
              className="h-fit w-24"
              src={`https://api.test.interactiva.net.co${
                partner.logo || "logo4.png"
              } `}
              alt={partner.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
