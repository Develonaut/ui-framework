import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Modal } from "../Modal";
import { Surface } from "../Surface";

import "./component.scss";

export const Dialog = forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth = "sm",
    onBackdropClick,
    onClose,
    open,
    scroll = "surface",
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby,
    ...other
  } = props;

  const backdropClick = useRef();
  const handleMouseDown = (event) => {
    // We don't want to close the dialog when clicking the dialog content.
    // Make sure the event starts and ends on the same DOM element.
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event) => {
    // Ignore the events not coming from the "backdrop".
    if (!backdropClick.current) {
      return;
    }

    backdropClick.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) onClose(event, "backdropClick");
  };

  return (
    <Modal
      className={clsx("minitab-ui-dialog", className)}
      disableEscapeKeyDown={disableEscapeKeyDown}
      onClose={onClose}
      open={open}
      ref={ref}
      onClick={handleBackdropClick}
      {...other}
    >
      {/* roles are applied via cloneElement from TransitionComponent */}
      {/* roles needs to be applied on the immediate child of Modal or it'll inject one */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={clsx(
          "minitab-ui-dialog-container",
          `minitab-ui-dialog-container-scroll-${scroll}`
        )}
        onMouseDown={handleMouseDown}
      >
        <Surface
          elevation={24}
          role="dialog"
          aria-describedby={ariaDescribedby}
          aria-labelledby={ariaLabelledby}
          className={clsx(
            "minitab-ui-dialog-surface",
            `minitab-ui-dialog-surface-scroll-${scroll}`,
            `minitab-ui-dialog-surface-width-${maxWidth}`,
            {
              "minitab-ui-dialog-surface-full-screen": fullScreen,
              "minitab-ui-dialog-surface-full-width": fullWidth,
            }
          )}
        >
          {children}
        </Surface>
      </div>
    </Modal>
  );
});

Dialog.propTypes = {
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": PropTypes.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": PropTypes.string,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: PropTypes.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: PropTypes.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs", false]),
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: PropTypes.oneOf(["body", "paper"]),
};
