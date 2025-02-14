import { useFetch } from "../hooks/useFetch";

export const Blogs = () => {
  const blogs = useFetch("get-blogs/");
  return (
    <section className="bg-[#cf9a46] py-10">
      <h2 className="text-center text-4xl font-bold tracking-[15px] text-white">
        BLOGS
      </h2>

      <div className="grid md:grid-cols-2 gap-5 px-10 md:px-20 py-10">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={index === 0 ? "md:row-span-2" : ""} // El primer blog ocupa 2 filas
          >
            <div className="p-5 rounded-lg h-full bg-white">
              <img
                className="h-[200px] md:h-[400px] w-full object-cover rounded-lg"
                src={`https://api.test.interactiva.net.co${blog.image_cover}`}
                alt=""
              />
              <div className="py-5">
                <h4 className="font-bold">{blog.title}</h4>
                <p>{blog.description}</p>
                <button className="w-full text-right">LEER MÁS</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
