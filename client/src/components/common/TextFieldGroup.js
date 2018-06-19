import React from "react";
import classnames from "classnames";
// import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  large,
  AppendButton
}) => {
  return (
    <React.Fragment>
      <input
        type={type}
        className={classnames("form-control", {
          "is-invalid": error,
          "form-control-lg": large
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {AppendButton && <AppendButton />}
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </React.Fragment>
  );
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
