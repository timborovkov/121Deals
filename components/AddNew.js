import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
const AddNew = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "170px",
        right: "44px",
        zIndex: 999,
      }}
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddNew;
