import React from "react";

export const Nosotros = () => {
  return (
    <section className="py-10">
      <h2 className="text-center text-4xl font-bold tracking-[15px] text-[#cf9a46]">
        NOSOTROS
      </h2>
      <p className="px-10 md:px-20 text-pretty py-10 md:text-3xl">
        Un copy cercano como hablandole a un amigo. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
        veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
        hendrerit in vulputate velit esse molestie consequat, vel illum dolore
        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
        dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
        te feugait nulla facilisi
      </p>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0">
        <div className="md:pl-20 flex items-center">
          <svg
            className="h-8 w-8 mx-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#0F0F0F">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
              />
              <path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622ZM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3Z"
              />
            </g>
          </svg>
          <div>
            <img
              className="min-w-[250px] h-[250px] object-cover "
              src="./nosotros_1.png"
              alt="Imagen nosotros instagram"
            />
            <p className="pt-2 text-[#d5a85f]">@churroceballos</p>
          </div>
        </div>
        <div className="px-2 flex overflow-hidden">
          <img
            className="w-[250px] h-[250px] "
            src="./nosotros_2.png"
            alt="nosotros 2"
          />
          <img
            className="w-[250px] h-[250px] "
            src="./nosotros_3.png"
            alt="nosotros 3"
          />
          <img
            className="w-[250px] h-[250px] "
            src="./nosotros_4.png"
            alt="nosotros 4"
          />
        </div>
      </div>
    </section>
  );
};
