export const Blogs = () => {
  return (
    <section className="bg-[#cf9a46] py-10">
      <h2 className="text-center text-4xl font-bold tracking-[15px] text-white ">
        BLOGS
      </h2>
      <div className="grid md:grid-cols-2 md:gap-10 gap-5 px-10 md:px-20 py-10">
        <div>
          <div className="p-5 rounded-lg h-full bg-white">
            <img
              className="h-[200px] md:h-[400px] w-full object-cover rounded-lg"
              src="exp_personalizadas.png"
              alt=""
            />
            <div className="py-5">
              <h4 className="font-bold">DESTINOS PARA PAREJAS EN 2025</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam
              </p>
              <button className="w-full text-right">LEER MÁS</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div className="p-5 rounded-lg bg-white">
            <img
              className="h-[150px] md:h-[200px] w-full object-cover rounded-lg"
              src="blogs_2.png"
              alt=""
            />
            <div className="py-5">
              <h4 className="font-bold">
                {" "}
                VUELVE LA VISA PARA VIAJAR A LONDRES
              </h4>
              <button className="w-full text-right">LEER MÁS</button>
            </div>
          </div>
          <div className="p-5 rounded-lg bg-white">
            <img
              className="h-[150px] md:h-[200px] w-full object-cover rounded-lg"
              src="blogs_3.png"
              alt=""
            />
            <div className="py-5">
              <h4 className="font-bold">TOP 3 DESTINOS EN COLOMBIA</h4>

              <button className="w-full text-right">LEER MÁS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
