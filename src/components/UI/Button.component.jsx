import React from "react";
import PropTypes from "prop-types";

const Button = ({ disabled, onClick, label }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
