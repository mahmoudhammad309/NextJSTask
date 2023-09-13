import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../GlobalRedux/Features/langSlice";
import { RootState } from "../GlobalRedux/store";

interface DropdownProps {
  options: string[];
  value: any;
  onChange: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  value,
}) => {
  // const [selectedCurrency, setSelectedCurrency] = useState<string>(
  //   options[0] || ""
  // );
  // const dispatch = useDispatch();
  // const langd = useSelector((state: RootState) => state.lang.lang);

  // const handleChange = (e: SelectChangeEvent<string>) => {
  //   const value = e.target.value;
  //   setSelectedCurrency(value);
  //   if (lang) {
  //     dispatch(changeLang(value));
  //     console.log(langd);
  //   }
  // };

  // useEffect(() => {
  //   setSelectedCurrency(options[0] || "");
  // }, [options]);

  return (
    <div style={{ width: "150px" }}>
      <Select
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        sx={{
          border: "0",
        }}
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
