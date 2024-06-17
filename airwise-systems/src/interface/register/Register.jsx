import bgRegister from "../../assets/bg-register.svg";
import { GrMagic } from "react-icons/gr";
import { Button } from "@nextui-org/button";
import PasswordInput from "../../components/Inputs/PasswordInput";
import TextInput from "../../components/Inputs/TextInput";
import EmailInput from "../../components/Inputs/EmailInput";

function Register() {
  return (
    <section className="bg-neutral-950 h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src={bgRegister}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <GrMagic className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" viewBox="0 0 28 24" />

            <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Bienvenido a AirWise Systems
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <TextInput label="Nombre de usuario" />
              </div>

              <div className="col-span-6">
                <EmailInput label="Correo electrónico" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <PasswordInput label="Contraseña" className="w-full p-3 rounded-md" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <PasswordInput label="Confirmar contraseña" className="w-full p-3 rounded-md" />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button
                  color="secondary"
                  variant="ghost"
                  className="inline-block shrink-0 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >
                  Crear cuenta
                </Button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  ¿Ya tienes una cuenta?
                  <a href="#" className="text-gray-700 underline pl-1">
                    Inicia sesión
                  </a>
                 .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Register;