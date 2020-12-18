import React from "react";
import { Button, Dialog, Typography } from "lib";

import "./story.scss";

export const Basic = () => {
  const emails = ["username@gmail.com", "user02@gmail.com"];
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleItemClick = (value) => () => {
    console.log(value);
    setSelectedValue(value);
    handleClose();
  };

  return (
    <div>
      <Typography variant="subtitle1">{`Selected: ${selectedValue}`}</Typography>
      <br />
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Basic Dialog
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        className="demo"
        maxWidth={false}
      >
        <ul>
          {emails.map((email) => (
            <li onClick={handleItemClick(email)} key={email}>
              {email}
            </li>
          ))}
        </ul>
      </Dialog>
    </div>
  );
};
