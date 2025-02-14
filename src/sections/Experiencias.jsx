import { Card_exp } from "../components/Card_exp";

export const Experiencias = () => {
  return (
    <>
      <section className="py-10">
        <h2 className="py-10 text-center md:text-4xl text-2xl font-bold tracking-[15px] text-[#cf9a46]">
          EXPERIENCIAS GRUPALES
        </h2>
        <div className="grid  md:grid-cols-3 gap-10 mx-10 md:mx-32">
          <Card_exp />
          <Card_exp />
          <Card_exp />
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-center md:text-4xl text-2xl font-bold md:tracking-[15px] tracking-[10px] text-[#cf9a46]">
          EXPERIENCIAS PERSONALIZADAS
        </h2>

        <div className="flex flex-col py-10 md:flex-row items-center">
          <img
            className="px-10"
            src="exp_personalizadas.png"
            alt="imagen experiencias personalizadas"
          />
          <div className="px-10 flex pt-10 flex-col gap-5">
            <h3 className="font-bold">¿QUÉ NOS HACE DIFERENTES?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diamnonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquamerat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi
            </p>
            <button className="w-fit bg-[#cf9a46] rounded-lg text-white px-10 py-3 font-bold text-center">
              COTIZAR MI VIAJE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
