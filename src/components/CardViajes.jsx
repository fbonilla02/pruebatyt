export const CardViajes = ({ img, text }) => {
  return (
    <div className="relative p-3 transparent">
      <img
        className=""
        src={`https://api.test.interactiva.net.co${img}`}
        alt=""
      />

      <p className="absolute flex gap-2 items-center  text-white bottom-10 right-10">
        {text}
        <span className="border border-white rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>{" "}
        </span>{" "}
      </p>
    </div>
  );
};
