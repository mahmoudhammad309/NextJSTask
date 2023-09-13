import { Box } from "@mui/material";
import Image from "next/image";

import lap1 from "../assets/images/lap1.png";
import lap2 from "../assets/images/lap2.png";
import lap3 from "../assets/images/lap3.png";
const ImagesSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: { lg: "0 135px", xs: "0 20px" },
        display: "flex",
        flexDirection: { lg: "row", xs: "column" },
        justifyContent: "space-around",
        marginBottom: "130px",
        marginTop: "60px",
        gap: "1rem",
      }}
    >
      <Box>
        <Image src={lap1} alt="lap1" style={{width: "100%", minHeight: "100%"}}/>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: { xs: "100%", lg: "50%" },
          gap: "1rem",
        }}
      >
        <Image style={{ width: "100%" }} src={lap2} alt="lap2" />
        <Image style={{ width: "100%" }} src={lap3} alt="lap3" />
      </Box>
    </Box>
  );
};

export default ImagesSection;
