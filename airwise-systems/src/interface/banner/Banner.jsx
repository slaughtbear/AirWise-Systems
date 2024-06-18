import { Lumiflex } from "uvcanvas";
import { Button } from "@nextui-org/react";
import bannerCover from "./svg/bannerCover.svg";

function Banner() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-80 backdrop-filter backdrop-blur-sm"></div>
        <Lumiflex />
      </div>

      <div className="container relative z-20 flex flex-col items-center justify-center px-6 py-16 mx-auto lg:flex-row lg:space-x-0">
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full lg:w-1/2 lg:items-start lg:text-left">
          <h1 className="flex flex-col text-5xl font-black leading-none text-purple-600 uppercase kanit-black sm:text-6xl md:text-7xl lg:text-8xl">
            Air-Wise
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Systems</span>
          </h1>
          <p className="text-sm mt-4 text-white sm:text-base work-sans-aesthetic">
            Nuestro sistema analiza y reporta la calidad del aire, detectando
            gases peligrosos y otras impurezas. Asegura la salud y bienestar de
            tu equipo con datos en tiempo real y respuestas rápidas a cualquier
            riesgo ambiental.
          </p>
          <div className="flex mt-4 justify-center lg:justify-start">
            <Button
              className="px-4 py-2 mr-4 text-purple-300 work-sans-aesthetic"
              color="secondary"
              variant="flat"
              size="lg"
            >
              COMENZAR AHORA
            </Button>
            <Button
              className="px-4 py-2 text-purple-300 work-sans-aesthetic"
              color="secondary"
              variant="ghost"
              size="lg"
            >
              MÁS INFORMACIÓN
            </Button>
          </div>
        </div>
        <div className="relative hidden lg:block w-full lg:w-1/2">
          <img
            src={bannerCover}
            className="max-w-full h-auto m-auto lg:max-w-lg"
            alt="Banner cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
