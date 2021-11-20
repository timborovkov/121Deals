import * as React from "react";
import { useRouter } from "next/router";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Header = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        top: "0px",
        width: "100%",
        zIndex: 999,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => router.push("/")}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            121.Deals
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => router.push("/search")}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
