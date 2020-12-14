import React, { useRef, useState } from "react";
import { Portal } from "lib";

export const API = () => {
  const [show, setShow] = useState(false);
  const container = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {show ? "Unmount children" : "Mount children"}
      </button>
      <div style={{ border: "1px solid black" }}>
        It looks like I will render here.
        {show ? (
          <Portal container={container.current}>
            <span>But I actually render here!</span>
          </Portal>
        ) : null}
      </div>
      <div style={{ border: "1px solid black" }} ref={container} />
    </div>
  );
};
