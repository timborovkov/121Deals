import * as React from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditIcon from "@mui/icons-material/Edit";

export default function Footer({ deal }) {
  const router = useRouter();
  const { id } = router.query;

  var active = 0;
  if (router.asPath.includes("/deal/buy")) {
    active = 1;
  }
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
          icon={<ShoppingCartIcon />}
          onClick={() => router.push(`/deal/buy/${id}`)}
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
