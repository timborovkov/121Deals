import SearchIcon from "@mui/icons-material/Search";
import {
  TextField,
  Container,
  InputAdornment,
  FormControl,
  Paper,
} from "@mui/material";

const SearchBar = () => {
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
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
