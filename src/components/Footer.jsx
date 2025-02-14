import React from "react";

export const Footer = () => {
  return (
    <footer className="grid md:grid-cols-4  p-10 gap-10">
      <div className="flex flex-col gap-5">
        <img src="logo.png" alt="" />
        <img src="logos_redes.png" alt="" />
      </div>
      <div>
        <ul>
          <li>Inicio</li>
          <li>¿Quienes somos?</li>
          <li>Viajes grupales</li>
          <li>Viajes a la medida</li>
          <li>Contáctanos</li>
          <li>Alianzas estratégicas</li>
          <li>Blogs</li>
          <li>Términos y condiciones</li>
          <li>Política de privacidad</li>
          <li>Registro Nacional de Turismo</li>
        </ul>
      </div>
      <div className="md:col-span-2">
        <ul>
          <li className="flex gap-2">
            <img className="h-4 mt-1" src="icono_mail.png" alt="" />{" "}
            info@allintravels.com{" "}
          </li>
          <li className="flex gap-2">
            <img className="h-4 mt-1" src="icono_telefono.png" alt="" /> 0057
            (604) 444 45 83{" "}
          </li>
          <li className="flex gap-2">
            <img className="h-4  mt-1" src="icono_ubicacion.png" alt="" />{" "}
            Carrera 43A # 18 Sur - 135 Of 834, Sao Paulo Plaza Medellín -
            Colombia.
          </li>
        </ul>
      </div>
    </footer>
  );
};
