import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

const HelperText = ({ error, children = "" }) => (
  <p
    className={clsx("minitab-ui-helper-text", {
      "minitab-ui-helper-text-error": error,
    })}
  >
    {children}
  </p>
);

export const TextField = ({
  autoComplete,
  autoFocus = false,
  defaultValue,
  disabled = false,
  error = false,
  fullWidth = false,
  helperText,
  id,
  label,
  multiline = false,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  readOnly = false,
  rows = 2,
  type = "text",
  value,
}) => {
  const as = multiline ? "textarea" : "input";

  return (
    <div
      className={clsx("minitab-ui-text-field", {
        "minitab-ui-text-field-error": error,
        "minitab-ui-text-field-disabled": disabled,
        "minitab-ui-text-field-full-width": fullWidth,
      })}
    >
      <label
        htmlFor={name}
        className={clsx("minitab-ui-text-field-label", {
          "minitab-ui-text-field-label-error": error,
          "minitab-ui-text-field-label-disabled": disabled,
          "minitab-ui-text-field-label-full-width": fullWidth,
        })}
      >
        {label}
      </label>
      {React.createElement(as, {
        className: clsx("minitab-ui-text-field-input", {
          "minitab-ui-text-field-input-error": error,
          "minitab-ui-text-field-input-disabled": disabled,
          "minitab-ui-text-field-input-full-width": fullWidth,
        }),
        id,
        name,
        disabled,
        placeholder,
        value,
        type,
        autoComplete,
        autoFocus,
        defaultValue,
        onChange,
        onFocus,
        onBlur,
        readOnly,
        ...(multiline ? { rows } : {}),
      })}
      <HelperText error={error}>{helperText}</HelperText>
    </div>
  );
};

TextField.propTypes = {
  autoComplete: PropTypes.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * The default value of the `input` element.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the `input` element is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: PropTypes.object,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes.string,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, a `textarea` element is rendered.instead of an input.
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * If `true`, the `input` element is readonly.
   */
  readOnly: PropTypes.bool,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: PropTypes.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.string,
};
