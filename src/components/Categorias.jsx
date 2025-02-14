import React from "react";
import { useFetch } from "../hooks/useFetch";
import { CardViajes } from "./CardViajes";
export const Categorias = () => {
  const categorias = useFetch("get-categories/");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {categorias.map((categoria) => (
        <React.Fragment key={categoria.id}>
          <CardViajes text={categoria.name} img={categoria.image_banner} />
        </React.Fragment>
      ))}
    </div>
  );
};
