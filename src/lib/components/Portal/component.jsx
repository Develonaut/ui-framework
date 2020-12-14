import { isValidElement, forwardRef, useState, cloneElement } from "react";
import { createPortal } from "react-dom";
import { useForkRef, useEnhancedEffect } from "lib/hooks";
import { setRef, HTMLElementType } from "lib/utils";
import PropTypes from "prop-types";

export const getContainer = (container) =>
  typeof container === "function" ? container() : container;

export const Portal = forwardRef(
  ({ children, container, disablePortal = false }, ref) => {
    const [mountNode, setMountNode] = useState(null);
    const handleRef = useForkRef(
      isValidElement(children) ? children.ref : null,
      ref
    );

    useEnhancedEffect(() => {
      if (!disablePortal) {
        setMountNode(getContainer(container) || document.body);
      }
    }, [container, disablePortal]);

    useEnhancedEffect(() => {
      if (mountNode && !disablePortal) {
        setRef(ref, mountNode);
        return () => {
          setRef(ref, null);
        };
      }

      return undefined;
    }, [ref, mountNode, disablePortal]);

    if (disablePortal) {
      if (isValidElement(children)) {
        return cloneElement(children, {
          ref: handleRef,
        });
      }
      return children;
    }

    return mountNode ? createPortal(children, mountNode) : mountNode;
  }
);

Portal.propTypes = {
  /**
   * The children to render into the `container`.
   */
  children: PropTypes.node,
  /**
   * A HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * The `children` will be inside the DOM hierarchy of the parent component.
   */
  disablePortal: PropTypes.bool,
};
