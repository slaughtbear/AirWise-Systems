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
      className="text-purple-400 work-sans-aesthetic"
      type={isVisible ? "text" : "password"}
      variant="bordered"
      color="secondary"
      size="lg"
      label={label}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
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
    />
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PasswordInput;
