import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";

function EmailInput({ label }) {
  EmailInput.propTypes = {
    label: PropTypes.string.isRequired, // PropTypes para la propiedad label
  };

  return <Input type="email" variant="underlined" isClearable label={label} isRequired />;
}

export default EmailInput;
