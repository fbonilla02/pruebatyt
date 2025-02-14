export const Navbar = () => {
  return (
    <header className="fixed z-10 w-screen flex items-center justify-between px-2 py-5 md:px-10 ">
      <div>
        <img className="h-10 md:h-full " src="./logo.png" alt="logo" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-10">
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Viajes</li>
          <li>Blogs</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div className="block md:hidden">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 17h14M5 12h14M5 7h14" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
    </header>
  );
};
