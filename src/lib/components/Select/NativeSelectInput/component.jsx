import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { ArrowDropDown } from "lib/icons/svg-icons";

import "./component.scss";

export const NativeSelectInput = forwardRef(
  ({ className, disabled, multiple, fullWidth = false, ...other }, ref) => {
    return (
      <div className="mtb-select-input-wrapper">
        <select
          className={clsx(
            "mtb-select-input",
            {
              "mtb-select-input-disabled": disabled,
              "mtb-select-input-multiple": multiple,
              "mtb-select-input-full-width": fullWidth,
            },
            className
          )}
          disabled={disabled}
          ref={ref}
          multiple={multiple}
          {...other}
        />
        {!multiple ? (
          <ArrowDropDown
            className={clsx("mtb-select-input-icon", {
              "mtb-select-input-icon-disabled": disabled,
            })}
          />
        ) : null}
      </div>
    );
  }
);

NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: PropTypes.node,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  multiple: PropTypes.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * The input value.
   */
  value: PropTypes.any,
};
