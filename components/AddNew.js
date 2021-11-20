import Link from "next/link";

import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
const AddNew = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "90px",
        left: "20px",
        zIndex: 999,
      }}
    >
      <Link href="/deal/add">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default AddNew;
