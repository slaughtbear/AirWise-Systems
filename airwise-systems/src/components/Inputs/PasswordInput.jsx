import React from "react";
import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";
import { EyeFilledIcon } from "../../interface/register/svg/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../interface/register/svg/EyeSlashFilledIcon";

function PasswordInput({ label }) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      className="text-white"
      type={isVisible ? "text" : "password"}
      variant="underlined"
      label={label}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      classNames="text-purple-500"
    />
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PasswordInput;
