import { Novatrix } from "uvcanvas";
import TextInput from "../../components/Inputs/TextInput";
import PasswordInput from "../../components/Inputs/PasswordInput";
import { Button } from "@nextui-org/react";

function Login() {
  return (
    <div className="font-mono bg-stone-950 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg relative">
              <Novatrix
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                }}
              />
            </div>

            <div className="w-full lg:w-1/2 bg-stone-900 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center text-purple-500">
                Bienvenido
              </h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-stone-900 rounded">
                <div className="mb-4">
                  <TextInput className="" label="Nombre de usuario" />
                </div>
                <div className="mb-4">
                  <PasswordInput
                    label="Contraseña"
                    className="px-10"
                  />
                </div>
                <div className="mb-6 text-center">
                  <Button color="secondary" variant="flat">
                    Iniciar sesión
                  </Button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Create an Account!
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
