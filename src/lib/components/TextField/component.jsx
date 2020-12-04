import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

const HelperText = ({ error, children = "" }) => (
  <p className="minitab-ui-helper-text">{children}</p>
);

export const TextField = ({
  value,
  onChange,
  label,
  error,
  helperText,
  placeholder,
  disabled,
}) => {
  return (
    <div
      className={clsx("minitab-ui-text-field", {
        "minitab-ui-text-field-error": error,
        "minitab-ui-text-field-disabled": disabled,
      })}
    >
      <label
        className={clsx("minitab-ui-text-field-label", {
          "minitab-ui-text-field-label-error": error,
          "minitab-ui-text-field-label-disabled": disabled,
        })}
      >
        {label}
      </label>
      <input
        className={clsx("minitab-ui-text-field-input", {
          "minitab-ui-text-field-input-error": error,
          "minitab-ui-text-field-input-disabled": disabled,
        })}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <HelperText error={error}>{helperText}</HelperText>
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  /**
   * Callback fired when a "click away" event is detected.
   */
  onChange: PropTypes.func,
  error: PropTypes.bool,
  placeHolder: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
};
