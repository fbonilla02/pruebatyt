export const Navbar = () => {
    return (
        <header className="fixed w-screen flex items-center justify-between px-10 py-5 ">
            <div>
                <img src="./logo.png" alt="logo" />
            </div>
            <nav>
                <ul className="flex gap-10">
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Viajes</li>
                    <li>Blogs</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    );
};
