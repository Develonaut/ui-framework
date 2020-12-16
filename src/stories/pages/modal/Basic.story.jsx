import React, { useState } from "react";
import { Modal, Button } from "lib";

export const Basic = () => {
  const style = () => {
    const top = 50 + Math.round(Math.random() * 20) - 10;
    const left = 50 + Math.round(Math.random() * 20) - 10;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      position: "absolute",
      width: 400,
      backgroundColor: "#fff",
      border: "2px solid #000",
      boxShadow:
        "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
      padding: "14px 21px 28px",
    };
  };

  // For demo purposes we randomize the modals position
  // on render, so illustrate the stacking of modals.
  const [modalStyle] = useState(style);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color="primary" onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={{ ...modalStyle, ...style }}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          {/* Recalls the story to render another modal */}
          <Basic />
        </div>
      </Modal>
    </div>
  );
};

Basic.parameters = {
  docs: {
    source: {
      type: "code",
    },
  },
};
