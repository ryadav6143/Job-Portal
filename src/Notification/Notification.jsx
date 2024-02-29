import React from "react";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Notification({ open, handleClose, alertMessage, alertSeverity }) {
  alertSeverity = alertSeverity ? alertSeverity : "default";
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }} // Positioning at top right
      sx={{ width: "25%" }}
      variant="filled"
      TransitionComponent={Slide}
    >
      <Alert
        onClose={handleClose}
        severity={alertSeverity}
        sx={{ width: "100%" }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
