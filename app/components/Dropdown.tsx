import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface DropdownProps {
  options: string[];
  value: any;
  onChange: any;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, value }) => {
  const selectFieldStyles = {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      borderLeft: "1px solid #121212",
      borderRadius: "0",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      borderWidth: "0",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E34824",
      borderWidth: "0",
    },
  };

  return (
    <div style={{ width: "150px" }}>
      <Select
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        sx={{ ...selectFieldStyles, ...{ height: "32px" } }}
      >
        {options.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default Dropdown;
