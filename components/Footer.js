import * as React from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactIcon from "@mui/icons-material/Mail";
import EditIcon from "@mui/icons-material/Edit";

export default function Footer({ deal }) {
  const router = useRouter();
  const { id } = router.query;

  var active = 0;
  if (router.asPath.includes("/deal/edit")) {
    active = 2;
  }

  return (
    <Box sx={{ flexGrow: 1, position: "fixed", bottom: "0px", width: "100%" }}>
      <BottomNavigation showLabels value={active}>
        <BottomNavigationAction
          label="Product"
          icon={<FavoriteIcon />}
          onClick={() => router.push(`/deal/${id}`)}
        />
        <BottomNavigationAction
          label="Buy"
          icon={<ContactIcon />}
          onClick={() => (window.location.href = `mailto:${deal.email}`)}
        />
        <BottomNavigationAction
          label="Edit"
          icon={<EditIcon />}
          onClick={() => router.push(`/deal/edit/${id}`)}
        />
      </BottomNavigation>
    </Box>
  );
}
