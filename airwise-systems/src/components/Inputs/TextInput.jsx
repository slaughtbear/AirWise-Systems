import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";

function TextInput({ label }) {
  TextInput.propTypes = {
    label: PropTypes.string.isRequired, // PropTypes para la propiedad label
  };

  return (
    <Input
      type="text"
      variant="underlined"
      clearable
      label={label}
      required
      classNames={{
        label: "text-purple-500",
        inputWrapper: "border-purple-500",
      }}
    />
  );
}

export default TextInput;
