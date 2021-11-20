import SearchIcon from "@mui/icons-material/Search";
import {
  TextField,
  Container,
  InputAdornment,
  FormControl,
} from "@mui/material";

const SearchBar = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50px",
        width: "100%",
        zIndex: 999,
      }}
    >
      <Container>
        <FormControl variant="outlined" fullWidth>
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
        </FormControl>
      </Container>
    </div>
  );
};

export default SearchBar;
