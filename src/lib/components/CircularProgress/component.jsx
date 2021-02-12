import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

const SIZE = 44;
const VARIANTS = {
  DETERMINATE: "determinate",
  INDETERMINATE: "indeterminate",
};

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */
export const CircularProgress = React.forwardRef(
  (
    {
      className,
      color = "primary",
      disableShrink = false,
      size = 40,
      style,
      thickness = 2.5,
      value = 0,
      variant = VARIANTS.INDETERMINATE,
      ...other
    },
    ref
  ) => {
    let rootAriaProps = { role: "progressbar" };

    let strokeDasharray = "80px, 200px";
    let strokeDashoffset = "0px";

    if (variant === VARIANTS.DETERMINATE) {
      const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
      strokeDasharray = `${circumference.toFixed(3)}`;
      strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(
        3
      )}px`;

      rootAriaProps = {
        ...rootAriaProps,
        "aria-valuenow": Math.round(value),
      };
    }

    return (
      <span
        className={clsx(className, "minitab-ui-circular-progress", {
          "minitab-ui-circular-progress-indeterminate":
            variant === VARIANTS.INDETERMINATE,
          "minitab-ui-circular-progress-determinate":
            variant === VARIANTS.DETERMINATE,
        })}
        style={{ width: size, height: size }}
        ref={ref}
        {...rootAriaProps}
        {...other}
      >
        <svg
          className="minitab-ui-circular-progress-svg"
          viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
        >
          <circle
            className="minitab-ui-circular-progress-circle"
            cx={SIZE}
            cy={SIZE}
            r={(SIZE - thickness) / 2}
            fill="none"
            strokeWidth={thickness}
            style={{
              strokeDasharray,
              strokeDashoffset,
            }}
          />
        </svg>
      </span>
    );
  }
);

CircularProgress.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * @default 'primary'
   */
  color: PropTypes.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   * @default 40
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: PropTypes.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: PropTypes.oneOf(["determinate", "indeterminate"]),
};
