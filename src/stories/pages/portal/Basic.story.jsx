import React, { useRef, useState } from "react";
import { Portal, Button } from "lib";

import "./story.scss";

export const Basic = () => {
  const container = useRef(null);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="demo">
      <div className="target" ref={container} />
      <Button color="primary" onClick={handleClick}>
        {show ? "Unmount children" : "Mount children"}
      </Button>
      <div className={`container ${show ? "show" : ""}`}>
        Maybe I will render here?
        {show ? (
          <Portal container={container.current}>
            <span>But I actually render here!</span>
          </Portal>
        ) : null}
      </div>
    </div>
  );
};
