import { useState } from "react";
import { useForm } from "react-hook-form"; // Librería que permite gestionar el estado y la validación de los formularios
import { auth } from "../../firebase/FirebaseConfig"; // Servicio de autenticación de Firebase
import {signInWithEmailAndPassword } from "firebase/auth"; // Servicio para iniciar sesión con Firebase
import { Link, useNavigate } from "react-router-dom"; // useNavigate se usa para implementar navegación dentro del componente
import { GrMagic } from "react-icons/gr";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import bgLogin from "./assets/bgLogin.jpg";
import PasswordInput from "../../components/Inputs/PasswordInput";

function Login() {
  const navigate = useNavigate();
  // Inicialización del hook useForm que registra los datos proporcionados por el usuario
  // register: observa todo elemento dentro del formulario, vía por la cual la librería sabe que cambios se producen en cada campo
  // handleSubmit: recopila los valores finales de cada elemento del formulario y los envía como un objeto
  // errors: actualiza la información de aquellos campos que no han superado cualquiera de las validaciones se hayan definido
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Objeto que almacena mensajes de errores
  const messages = {
    req: "Este campo es obligatorio",
    email: "Debes introducir una dirección correcta",
    password: "Contraseña incorrecta",
  };

  // Expresiones regulares
  const patterns = {
    username: /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/, // Asegura que el nombre de usuario contenga al menos una letra y puede incluir números, guiones bajos y guiones
    email:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, // Valida direcciones de correo electrónico que siguen el formato estándar
  };

  // onSubmit() es un manejador de datos envíados en el formulario
  // (data) es el parámetro que contiene los datos recopilados cuando son enviados por React Hook Form
  const onSubmit = async (data) => {
    const { signUpEmail, signUpPassword } = data;
    try {
      await signInWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      // Redirige a la página de dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error iniciando sesión: ", error.message);
    }
  };

  return (
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
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6">
                <Input
                  {...register("signUpEmail", {
                    required: messages.req,
                    pattern: {
                      value: patterns.email,
                      message: messages.email,
                    },
                  })}
                  name="signUpEmail"
                  type="email"
                  label="Email"
                  isRequired
                  isClearable
                  variant="bordered"
                  color="secondary"
                  size="lg"
                  className="text-purple-400 work-sans-aesthetic"
                  classNames={{
                    label: "text-purple-400",
                    input: "text-purple-400",
                  }}
                />
                {errors.signUpEmail && (
                  <span className="text-red-600">
                    {errors.signUpEmail.message}
                  </span>
                )}
              </div>

              <div className="col-span-6">
                <PasswordInput
                  register={register}
                  registerName="signUpPassword"
                  label="Contraseña"
                />
                {errors.signUpPassword && (
                  <span className="text-red-600">
                    {errors.signUpPassword.message}
                  </span>
                )}
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
  );
}

export default Login;
