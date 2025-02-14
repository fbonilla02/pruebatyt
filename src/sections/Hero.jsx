import { Categorias } from "../components/Categorias";
import { useFetch } from "../hooks/useFetch";

export const Hero = () => {
  const banner = useFetch("get-banners/");

  return (
    <section>
      {banner.map((banner) => (
        <div key={banner} className="h-screen w-full relative ">
          <img
            className="h-full object-cover"
            src={`https://api.test.interactiva.net.co${banner.image}`}
            alt=""
          />
          <div className="absolute bottom-0 w-full h-full md:flex md:flex-col md:justify-end md:gap-20 md:pb-20">
            <h1 className="h-full w-full md:h-0 flex justify-center items-center flex-col text-6xl gap-5 font-bold text-white md:tracking-[25px]">
              {banner.title}
              <span className="text-3xl text-[#cf9a46]">EXPERIENCE</span>
            </h1>
            <div className="hidden md:block">
              <Categorias />
            </div>
          </div>
        </div>
      ))}
      <div className="block md:hidden">
        <Categorias />
      </div>
    </section>
  );
};
