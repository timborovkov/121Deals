import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactIcon from "@mui/icons-material/Mail";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ flexGrow: 1, position: "fixed", bottom: "0px", width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Product" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Contact" icon={<ContactIcon />} />
      </BottomNavigation>
    </Box>
  );
}
