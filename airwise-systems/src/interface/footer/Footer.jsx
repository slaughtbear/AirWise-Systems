import { Lumiflex } from "uvcanvas";
import { IoMdDownload } from "react-icons/io";
import { Button } from "@nextui-org/button";

function Footer() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-90 backdrop-filter backdrop-blur-sm"></div>
        <Lumiflex />
      </div>
      <div className="relative z-20 max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="kanit-black font-bold text-3xl mb-3 text-purple-600">Descarga nuestra app</h3>
          <p className="work-sans-aesthetic">¡Mantente informado las 24 horas!</p>
          <div className="flex justify-center my-5">
            <Button
              startContent={<IoMdDownload className="h-5 w-5"/>}
              className="text-white"
              color="secondary"
              variant="flat"
              size="lg"
            >
              Descargar
            </Button>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            &copy; Air-Wise Systems, 2024.
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">Sobre nosotros</span>
            <span className="px-2 border-l">Contactanos</span>
            <span className="px-2 border-l">Políticas de privacidad</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
