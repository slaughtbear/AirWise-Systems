import CardUno from "./assets/C1.jpg";
import CardDos from "./assets/C2.jpg";
import CardTres from "./assets/C3.jpg";
import CardCuatro from "./assets/C4.jpg";
import { Image } from "@nextui-org/image";
import {
  MdTrackChanges,
  MdAutorenew,
  MdCrisisAlert,
  MdEqualizer,
} from "react-icons/md";

function Services() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden h-screen dark:bg-gray-800">
      <div className="relative z-20 max-w-screen-xl p-4 px-4 mx-auto sm:px-6 lg:px-8 py-26">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
              <p className="work-sans-aesthetic text-xs mx-3 font-semibold leading-6 text-purple-200 uppercase">
                Servicios
              </p>
              <h1 className="kanit-black mt-2 font-bold sm:text-4xl lg:text-6xl leading-8 sm:leading-10 text-purple-600 dark:text-white">
                Innovando para un ambiente más seguro
              </h1>

              <p className="work-sans-aesthetic mt-5 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Ofrecemos soluciones automatizadas para tu hogar o empresa,
                proporcionando un monitoreo continuo y preciso de la calidad del
                aire.
              </p>
              <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6">
                      <MdTrackChanges className="w-4 h-4 text-purple-500" />
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Monitoreo
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6">
                      <MdAutorenew className="w-4 h-4 text-purple-500" />
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Automatización
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6">
                      <MdCrisisAlert className="w-4 h-4 text-purple-500" />
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Alertas en tiempo real
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6">
                      <MdEqualizer className="w-4 h-4 text-purple-500" />
                    </span>
                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Análisis de datos
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                  <Image
                    isBlurred
                    isZoomed
                    width={300}
                    src={CardUno}
                    alt="Card 1"
                    className="w-32 rounded-lg shadow-lg md:w-56"
                  />
                  <Image
                    isBlurred
                    isZoomed
                    width={260}
                    src={CardTres}
                    alt="Card 2"
                    className="w-40 rounded-lg shadow-lg md:w-64"
                  />
                </div>
                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                  <Image
                    isBlurred
                    isZoomed
                    width={180}
                    src={CardCuatro}
                    alt="Card 3"
                    className="w-24 rounded-lg shadow-lg md:w-40"
                  />
                  <Image
                    isBlurred
                    isZoomed
                    width={200}
                    src={CardDos}
                    alt="Card 4"
                    className="w-32 rounded-lg shadow-lg md:w-56"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
