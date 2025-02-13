import { Viajes } from "../components/Viajes"

export const Hero = () => {
    return (
        <section >
            <div className="h-screen relative">
                <img className="absolute -z-10 h-9/10" src="header.png" alt="Imagen hero background" />
                <div className="absolute flex flex-col  items-center bottom-0 h-9/10 justify-center  w-full gap-5">
                    <h1 className="flex content-center items-center flex-col text-6xl gap-5 font-bold text-white tracking-[25px]">THE TRAVEL <span className="text-3xl text-[#cf9a46]">EXPERIENCE</span> </h1>
                    <div className="w-screen flex items-center pt-10 justify-center gap-5 ">
                        <Viajes img='viajes_grupales.png' text='Viajes grupales' />
                        <Viajes img='viajes_a_la_medida.png' text='Viajes a la medida' />
                        <Viajes img='destinos_para_parejas.png' text='Destinos para parejas' />
                    </div>
                </div>
            </div>
        </section>
    )
}
