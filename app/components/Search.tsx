import { Container, InputAdornment, TextField } from "@mui/material";
import { SetStateAction, useState } from "react";
import SearchIcon from "../assets/icons/SearchIcon";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Container
      maxWidth="md"
      sx={{ borderRadius: "100px", height: 40, width: 344 }}
    >
      <TextField
        id="search"
        type="search"
        value={searchTerm}
        onChange={handleChange}
        InputProps={{
          sx: {
            borderRadius: "100px",
            border: "1px solid #726BCF",
            height: 40,
            maxWidth: 344,
          },
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default Search;
