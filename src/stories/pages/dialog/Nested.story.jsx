import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "lib";

import "./story.scss";

export const Nested = () => {
  const [dialogs, setDialogs] = useState({
    one: false,
    two: false,
    three: false,
  });
  const toggleOpen = (name) => () =>
    setDialogs((prevDialogs) => ({
      ...dialogs,
      [name]: !prevDialogs[name],
    }));

  const StatisticsDialog = ({ open, onClose }) => (
    <Dialog
      open={open}
      onClose={onClose}
      className="nested-demo-statistics"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle id="max-width-dialog-title">
        Display Descriptive Statistics: Statistics
      </DialogTitle>
      <DialogContent dividers className="nested-demo-statistics-content">
        <div>
          <input type="checkbox" />
          <label>Mean</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>SE Mean</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Standard Deviation</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Variance</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Coefficient of variation</label>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button color="primary" onClick={onClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );

  const GraphsDialog = ({ open, onClose }) => (
    <Dialog open={open} onClose={onClose} className="nested-demo-graphs">
      <DialogTitle id="max-width-dialog-title">
        Display Descriptive Statistics: Graphs
      </DialogTitle>
      <DialogContent dividers className="nested-demo-graphs-content">
        <div>
          <input type="checkbox" />
          <label>Histogram of data</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Histogram of data, with normal curve</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Individual value plot</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Boxplot of data</label>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button color="primary" onClick={onClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      <Button color="primary" onClick={toggleOpen("one")}>
        Open Nested Dialog
      </Button>
      <Dialog
        open={dialogs.one}
        className="nested-demo"
        onClose={toggleOpen("one")}
        aria-labelledby="nested-demo-one-dialog-title"
        fullWidth
      >
        <DialogTitle id="nested-demo-one-dialog-title">
          Display Descriptive Statistics
        </DialogTitle>
        <DialogContent dividers className="nested-demo-content">
          <div className="nested-demo-content-left">
            <ul>
              <li>C1</li>
              <li>C2</li>
              <li>C3</li>
            </ul>
            <Button>Select</Button>
          </div>
          <div className="nested-demo-content-right">
            <TextField
              name="variables"
              label="Variables *"
              multiline
              fullWidth
            />
            <TextField
              name="by-variables"
              label="By Variables"
              multiline
              fullWidth
            />
            <div className="nested-demo-content-right-options">
              <Button onClick={toggleOpen("two")}>Statistics</Button>
              <Button onClick={toggleOpen("three")}>Graphs</Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpen("one")}>Close</Button>
          <Button color="primary" onClick={toggleOpen("one")}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <StatisticsDialog open={dialogs.two} onClose={toggleOpen("two")} />
      <GraphsDialog open={dialogs.three} onClose={toggleOpen("three")} />
    </>
  );
};
