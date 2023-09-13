"use client";
import { SvgIconProps, SvgIcon } from "@mui/material";

const HeartIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.222 21.2789C12.8254 21.4189 12.172 21.4189 11.7754 21.2789C8.39203 20.1239 0.832031 15.3055 0.832031 7.13885C0.832031 3.53385 3.73703 0.617188 7.3187 0.617188C9.44203 0.617188 11.3204 1.64385 12.4987 3.23052C13.677 1.64385 15.567 0.617188 17.6787 0.617188C21.2604 0.617188 24.1654 3.53385 24.1654 7.13885C24.1654 15.3055 16.6054 20.1239 13.222 21.2789Z"
        fill="#554AF0"
      />
    </SvgIcon>
  );
};

export default HeartIcon;
