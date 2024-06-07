import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../svg/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../svg/EyeSlashFilledIcon";
import PropTypes from 'prop-types'; 


function PasswordInput( {label} ) {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  PasswordInput.propTypes = {
    label: PropTypes.string.isRequired, // PropTypes para la propiedad label
  };

  return (
    <Input
      label={label}
      variant="underlined"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
  );
}

export default PasswordInput;
