import React from "react";
import PropTypes from "prop-types";
import { NativeSelectInput } from "./NativeSelectInput";
import clsx from "clsx";
import { HelperText } from "lib";

import "./component.scss";

export const Select = React.forwardRef(function Select(props, ref) {
  const {
    error,
    disabled,
    fullWidth,
    children,
    className,
    input,
    inputProps,
    label,
    multiple = false,
    helperText,
    name,
    ...other
  } = props;
  // We only support native at the moment, but in the future that could change.
  // Want to keep this flexible incase we ever have the option to do our own
  // custom select input.
  const as = NativeSelectInput;

  // Most of the logic is implemented in NativeSelectInput.
  // The Select component is a simple API wrapper to expose something better to play with.
  return (
    <div
      className={clsx(
        "mtb-select",
        {
          "mtb-select-error": error,
          "mtb-select-disabled": disabled,
          "mtb-select-full-width": fullWidth,
          "mtb-select-multiple": multiple,
        },
        className
      )}
    >
      <label
        htmlFor={name}
        className={clsx("mtb-select-label", {
          "mtb-select-label-error": error,
          "mtb-select-label-disabled": disabled,
          "mtb-select-label-full-width": fullWidth,
          "mtb-select-label-multiple": multiple,
        })}
      >
        {label}
      </label>
      {React.createElement(as, {
        name,
        children,
        multiple,
        ref,
        ...other,
      })}
      <HelperText error={error}>{helperText}</HelperText>
    </div>
  );
});

Select.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The option elements to populate the select with.
   */
  children: PropTypes.node,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: PropTypes.bool,
  /**
   * The `id` of the `select` element.
   */
  id: PropTypes.string,
  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label: PropTypes.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: PropTypes.string,
  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   * @default 0
   */
  labelWidth: PropTypes.number,
  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: PropTypes.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: PropTypes.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: PropTypes.object,
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: PropTypes.any,
};
