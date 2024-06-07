import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";

function TextInput({ label }) {
  TextInput.propTypes = {
    label: PropTypes.string.isRequired, // PropTypes para la propiedad label
  };

  return (
    <Input
      className="text-white"
      type="text"
      variant="underlined"
      isClearable
      label={label}
      isRequired
      classNames="text-purple-500"
    />
  );
}

export default TextInput;
