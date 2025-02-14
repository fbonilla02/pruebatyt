import React from "react";

export const Card_exp = ({
  img,
  title,
  status,
  color,
  desc,
  cost,
  init,
  end,
}) => {
  return (
    <div className=" text-center">
      <div className=" shadow-xl rounded-2xl bg-white ">
        <div className="w-full">
          <img
            className="w-full  h-[300px] "
            src={`https://api.test.interactiva.net.co${img}`}
            alt="Experiencias grupales africa"
          />
          <p
            className="text-white font-bold"
            style={{ backgroundColor: color }}
          >
            {status}
          </p>
        </div>
        <div className="h-full flex flex-col py-5 gap-3 z-10 ">
          <h3 className="font-bold">{title}</h3>
          <h4>5 AL 15 DE ABRIL | DESDE {cost} USD</h4>
          <p>{desc}</p>
        </div>
      </div>
      <div className="bg-[#cf9a46] -top-3 py-4 pt-7  rounded-b-2xl -z-10 relative text-white font-bold underline  ">
        <p>MÁS INFORMACIÓN</p>
      </div>
    </div>
  );
};
