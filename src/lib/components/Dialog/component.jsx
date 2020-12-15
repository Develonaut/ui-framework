import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { capitalCase } from "change-case";
import { Modal } from "../Modal";
import { Backdrop } from "../Backdrop";
import { Surface } from "../Surface";

export const Dialog = React.forwardRef(
  (
    {
      BackdropProps = {},
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
      SurfaceComponent = Surface,
      SurfaceProps = {},
      scroll = "paper",
      "aria-describedby": ariaDescribedby,
      "aria-labelledby": ariaLabelledby,
      ...other
    },
    ref
  ) => {
    const backdropClick = React.useRef();
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

      if (onClose) {
        onClose(event, "backdropClick");
      }
    };

    return (
      <Modal
        className={clsx("minitab-ui-dialog", className)}
        BackdropComponent={Backdrop}
        BackdropProps={{ ...BackdropProps }}
        closeAfterTransition
        disableEscapeKeyDown={disableEscapeKeyDown}
        onClose={onClose}
        open={open}
        ref={ref}
        onClick={handleBackdropClick}
        {...other}
      >
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className={clsx("minitab-ui-dialog-container")}
          onMouseDown={handleMouseDown}
        >
          <SurfaceComponent
            elevation={24}
            role="dialog"
            aria-describedby={ariaDescribedby}
            aria-labelledby={ariaLabelledby}
            {...SurfaceProps}
            className={clsx(
              "minitab-ui-dialog-surface",
              `minitab-ui-dialog-surface-width-${capitalCase(
                String(maxWidth)
              )}`,
              {
                "minitab-ui-dialog-surface-full-screen": fullScreen,
                "minitab-ui-dialog-surface-full-width": fullWidth,
              },
              SurfaceProps.className
            )}
          >
            {children}
          </SurfaceComponent>
        </div>
      </Modal>
    );
  }
);

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
   * @ignore
   */
  BackdropProps: PropTypes.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
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
   * The component used to render the body of the dialog.
   * @default Surface
   */
  SurfaceComponent: PropTypes.elementType,
  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   * @default {}
   */
  SurfaceProps: PropTypes.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: PropTypes.oneOf(["body", "paper"]),
  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition) component.
   */
  TransitionProps: PropTypes.object,
};
