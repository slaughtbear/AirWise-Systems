import { useState } from "react";
import { useForm } from "react-hook-form"; // Librería que permite gestionar el estado y la validación de los formularios
import { ToastContainer, toast, Bounce } from "react-toastify"; // Librería que permite mostrar mensajes en el componente
import { Link, useNavigate } from "react-router-dom"; // useNavigate se usa para implementar navegación dentro del componente
import { auth } from "../../firebase/FirebaseConfig"; // Servicio de autenticación de Firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Servicio para registrar usuarios con Firebase
import { GrMagic } from "react-icons/gr";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import bgLogin from "../login/assets/bgLogin.jpg";
import PasswordInput from "../../components/Inputs/PasswordInput";
import "react-toastify/dist/ReactToastify.css"; // Estilos de Toastify


function Register() {
  // Uso de navegación de rutas dentro del componente
  const navigate = useNavigate();

  // Inicialización del estado "userInfo", objeto que contiene:
  const [userInfo, setUserInfo] = useState({
    // Propiedades del formulario que se inicializan como vacías
    signUpUser: "",
    signUpEmail: "",
    signUpPassword: "",
    signUpConfirmPass: "",
  });

  // Inicialización del hook useForm que registra los datos proporcionados por el usuario
  // register: observa todo elemento dentro del formulario, vía por la cual la librería sabe que cambios se producen en cada campo
  // handleSubmit: recopila los valores finales de cada elemento del formulario y los envía como un objeto
  // errors: actualiza la información de aquellos campos que no han superado cualquiera de las validaciones se hayan definido
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit() es un manejador de datos envíados en el formulario
  // (data) es el parámetro que contiene los datos recopilados cuando son enviados por React Hook Form
  const onSubmit = async (data) => {
    const { signUpEmail, signUpPassword, signUpUser } = data;
    try { // userCredential es un objeto que contiene información del usuario registrado
      const userCredential = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword); // createUserWithEmailAndPassword Registra al usuario con su correo y contraseña
      // Después de crear el usuario updateProfile establece el nombre de usuario
      await updateProfile(userCredential.user, { displayName: signUpUser }); // userCredential obtiene el usuario, y el displayName lo guarda 
      toast.success("Usuario registrado correctamente", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } catch (error) {
      console.error("Error registrando usuario: ", error.message);
      toast.error("Error registrando usuario: ", error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  // Objeto que almacena mensajes de errores
  const messages = {
    req: "Este campo es obligatorio",
    username:
      "El nombre de usuario debe tener al menos una letra y puede incluir números, guiones bajos y guiones",
    email: "Debes introducir una dirección correcta",
    password: "Contraseña incorrecta",
  };

  // Expresiones regulares
  const patterns = {
    username: /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/, // Asegura que el nombre de usuario contenga al menos una letra y puede incluir números, guiones bajos y guiones
    email:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, // Valida direcciones de correo electrónico que siguen el formato estándar
  };

  return (
    <section className="bg-stone-950">
      <ToastContainer />
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative block lg:hidden">
              <a
                className="inline-flex items-center justify-center rounded-full bg-stone-950 text-blue-600 sm:size-20"
                href="#"
              >
                <GrMagic className="text-purple-500 w-8 h-8 sm:h-10" />
              </a>

              <h1 className="uppercase kanit-black mt-2 text-2xl font-bold text-purple-600 sm:text-3xl md:text-4xl">
                Air-Wise Systems
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6">
                <Input
                  {...register("signUpUser", {
                    required: messages.req,
                    pattern: {
                      value: patterns.username,
                      message: messages.username,
                    },
                  })}
                  variant="bordered"
                  color="secondary"
                  label="Usuario"
                  type="text"
                  isClearable
                  size="lg"
                  className="text-purple-400 work-sans-aesthetic"
                  classNames={{
                    label: "text-purple-400",
                    input: "text-purple-400",
                  }}
                />
                {errors.signUpUser && (
                  <span className="text-red-600">
                    {errors.signUpUser.message}
                  </span>
                )}
              </div>

              <div className="col-span-6">
                <Input
                  {...register("signUpEmail", {
                    required: messages.req,
                    pattern: {
                      value: patterns.email,
                      message: messages.email,
                    },
                  })}
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
                {errors.signUpEmail && (
                  <span className="text-red-600">
                    {errors.signUpEmail.message}
                  </span>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
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

              <div className="col-span-6 sm:col-span-3">
                <PasswordInput
                  register={register}
                  registerName="signUpConfirmPass"
                  label="Confirmar contraseña"
                />
                {errors.signUpConfirmPass && (
                  <span className="text-red-600">
                    {errors.signUpConfirmPass.message}
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
                  Registrarme
                </Button>

                <p className="work-sans-aesthetic mt-4 text-sm text-gray-500 sm:mt-0">
                  ¿Ya tienes una cuenta?
                  <Link to="/login" className="text-purple-700 underline ml-2">
                    Inicia sesión
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

export default Register;
