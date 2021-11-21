import { useRouter } from "next/router";

import SearchIcon from "@mui/icons-material/Search";
import {
  TextField,
  Container,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";

const SearchBar = ({ change }) => {
  const router = useRouter();

  return (
    <div
      style={{
        position: "absolute",
        top: "80px",
        width: "100%",
        zIndex: 999,
      }}
    >
      <Container maxWidth="sm">
        <Paper>
          <TextField
            label="Search"
            variant="filled"
            fullWidth
            onChange={(e) => {
              window.searchdata = e.target.value;
              if (
                change &&
                (e.target.value.length >= 3 || e.target.value.length == 0)
              ) {
                change(e.target.value);
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="primary"
                    aria-label="search"
                    component="span"
                    onClick={() => router.push("/search")}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default SearchBar;
