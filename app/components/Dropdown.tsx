import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

const Dropdown = ({ options }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const handleCurrencyChange = (e) => {
    const value = e.target.value;
    console.log({ value });
    setSelectedCurrency(value);
  };
  return (
    <div style={{ width: "150px" }}>
      <Select
        variant="outlined"
        fullWidth
        value={selectedCurrency}
        onChange={handleCurrencyChange}
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
