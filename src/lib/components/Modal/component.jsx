import React, {
  cloneElement,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from "react";
import PropTypes from "prop-types";
import { elementAcceptingRef, HTMLElementType, ownerDocument } from "lib/utils";
import { useForkRef, useEventCallback } from "lib/hooks";
import ModalManager, { ariaHidden } from "./ModalManager";
import { TrapFocus } from "../TrapFocus";
import { Backdrop } from "../Backdrop";
import { Portal } from "../Portal";
import clsx from "clsx";

import "./component.scss";

function getContainer(container) {
  return typeof container === "function" ? container() : container;
}

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const manager = new ModalManager();

export const Modal = forwardRef(
  (
    {
      children,
      className,
      container,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      onBackdropClick,
      onClose,
      onKeyDown,
      open,
      ...other
    },
    ref
  ) => {
    const modal = useRef({});
    const mountNodeRef = useRef(null);
    const modalRef = useRef(null);
    const handleRef = useForkRef(modalRef, ref);

    const getDoc = () => ownerDocument(mountNodeRef.current);
    const getModal = () => {
      modal.current.modalRef = modalRef.current;
      modal.current.mountNode = mountNodeRef.current;
      return modal.current;
    };

    const handleMounted = () => {
      manager.mount(getModal(), { disableScrollLock });

      // Fix a bug on Chrome where the scroll isn't initially 0.
      modalRef.current.scrollTop = 0;
    };

    const handleOpen = useEventCallback(() => {
      const resolvedContainer = getContainer(container) || getDoc().body;

      manager.add(getModal(), resolvedContainer);

      // The element was already mounted.
      if (modalRef.current) {
        handleMounted();
      }
    });

    const isTopModal = React.useCallback(
      () => manager.isTopModal(getModal()),
      []
    );

    const handlePortalRef = useEventCallback((node) => {
      mountNodeRef.current = node;

      if (!node) {
        return;
      }

      if (open && isTopModal()) {
        handleMounted();
      } else {
        ariaHidden(modalRef.current, true);
      }
    });

    const handleClose = useCallback(() => {
      manager.remove(getModal());
    }, []);

    useEffect(() => {
      return () => {
        handleClose();
      };
    }, [handleClose]);

    useEffect(() => {
      if (open) {
        handleOpen();
      } else {
        handleClose();
      }
    }, [open, handleClose, handleOpen]);

    if (!keepMounted && !open) {
      return null;
    }

    const handleBackdropClick = (event) => {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (onClose) {
        onClose(event, "backdropClick");
      }
    };

    const handleKeyDown = (event) => {
      if (onKeyDown) {
        onKeyDown(event);
      }

      // The handler doesn't take event.defaultPrevented into account:
      //
      // event.preventDefault() is meant to stop default behaviors like
      // clicking a checkbox to check it, hitting a button to submit a form,
      // and hitting left arrow to move the cursor in a text input etc.
      // Only special HTML elements have these default behaviors.
      if (event.key !== "Escape" || !isTopModal()) {
        return;
      }

      if (!disableEscapeKeyDown) {
        // Swallow the event, in case someone is listening for the escape key on the body.
        event.stopPropagation();

        if (onClose) {
          onClose(event, "escapeKeyDown");
        }
      }
    };

    const childProps = {};
    if (children.props.tabIndex === undefined) {
      childProps.tabIndex = children.props.tabIndex || "-1";
    }

    return (
      <Portal
        ref={handlePortalRef}
        container={container}
        disablePortal={disablePortal}
      >
        {/*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */}
        <div
          className={clsx("minitab-ui-modal", {
            "minitab-ui-modal-hidden": !open,
          }, className)}
          ref={handleRef}
          onKeyDown={handleKeyDown}
          role="presentation"
          {...other}
        >
          {hideBackdrop ? null : (
            <Backdrop open={open} onClick={handleBackdropClick} />
          )}
          <TrapFocus
            disableEnforceFocus={disableEnforceFocus}
            disableAutoFocus={disableAutoFocus}
            disableRestoreFocus={disableRestoreFocus}
            getDoc={getDoc}
            isEnabled={isTopModal}
            open={open}
          >
            {cloneElement(children, childProps)}
          </TrapFocus>
        </div>
      </Portal>
    );
  }
);

Modal.propTypes = {
  /**
   * A single child content element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * A HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: PropTypes.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: PropTypes.bool,
  /**
   * If `true`, hitting escape will not fire `onClose`.
   */
  disableEscapeKeyDown: PropTypes.bool,
  /**
   * The `children` will be inside the DOM hierarchy of the parent component.
   */
  disablePortal: PropTypes.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: PropTypes.bool,
  /**
   * Disable the scroll lock behavior.
   */
  disableScrollLock: PropTypes.bool,
  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: PropTypes.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: PropTypes.bool,
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * If `true`, the modal is open.
   */
  open: PropTypes.bool.isRequired,
};
