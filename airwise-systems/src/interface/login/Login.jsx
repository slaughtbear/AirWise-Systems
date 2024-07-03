//import TextInput from "../../components/Inputs/TextInput";
import SignUpForm from "./scripts/SignUpForm";
import bgLogin from "./assets/bgLogin.jpg";
import PasswordInput from "../../components/Inputs/PasswordInput";
import { GrMagic } from "react-icons/gr";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <SignUpForm />
      <section className="bg-stone-950">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src={bgLogin}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <GrMagic className="w-9 h-9 text-purple-400" />
              </a>

              <h2 className="uppercase font-bold kanit-black mt-6 text-2xl text-purple-400 sm:text-3xl md:text-4xl">
                Air-Wise Systems
              </h2>

              <p className="mt-4 work-sans-aesthetic text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative mt-1 block lg:hidden">
                <a
                  className="inline-flex items-center justify-center size-30 rounded-full bg-stone-950 text-blue-600 sm:size-20"
                  href="#"
                >
                  <GrMagic className="text-purple-500 w-8 h-8 sm:h-8" />
                </a>

                <h1 className="uppercase kanit-black mt-2 text-2xl font-bold text-purple-600 sm:text-3xl md:text-4xl">
                  Air-Wise Systems
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>

              <form id="signup-form" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <Input
                    id="signup-email"
                    isRequired
                    variant="bordered"
                    color="secondary"
                    label="Email"
                    type="email"
                    isClearable
                    size="lg"
                    className="text-purple-400 work-sans-aesthetic"
                    classNames={{
                      label: "text-purple-400",
                      input: "text-purple-400",
                    }}
                  />
                </div>

                <div className="col-span-6">
                  <PasswordInput
                    id="signup-password"
                    label="Contraseña"
                    isRequired
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <Button
                    type="submit"
                    className="text-white inline-block shrink-0"
                    color="secondary"
                    variant="flat"
                    size="lg"
                  >
                    Iniciar sesión
                  </Button>

                  <p className="work-sans-aesthetic mt-4 text-sm text-gray-500 sm:mt-0">
                    ¿No tienes una cuenta?
                    <Link
                      to="/register"
                      className="text-purple-700 underline ml-2"
                    >
                      Regístrate
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default Login;
