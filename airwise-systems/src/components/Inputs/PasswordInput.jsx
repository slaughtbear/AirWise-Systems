// PasswordInput.jsx

import React from "react";
import PropTypes from "prop-types";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../../interface/register/svg/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../interface/register/svg/EyeSlashFilledIcon";

function PasswordInput({ label, register, registerName }) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Objeto que almacena mensajes de errores
  const messages = {
    req: "Este campo es obligatorio",
    password: "Contraseña incorrecta",
  };

  // Expresiones regulares
  const patterns = {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  };

  return (
    <Input
      className="text-purple-400 work-sans-aesthetic"
      type={isVisible ? "text" : "password"}
      variant="bordered"
      color="secondary"
      size="lg"
      label={label}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="h-5 w-5 text-2xl pointer-events-none" />
          ) : (
            <EyeFilledIcon className="h-5 w-5 text-2xl pointer-events-none" />
          )}
        </button>
      }
      classNames={{
        label: "text-purple-400",
      }}
      {...register(registerName, {
        required: messages.req,
        pattern: {
          value: patterns.password,
          message: messages.password,
        },
      })}
    />
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired, // Asegúrate de que register sea requerido
  registerName: PropTypes.string.isRequired, // Propiedad para el nombre de registro dinámico
  required: PropTypes.bool,
};

export default PasswordInput;
