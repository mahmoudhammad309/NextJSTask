import { Box, Stack , Typography} from "@mui/material";
import Image from "next/image";

interface Props {
  category: any;
}

const Category: React.FC<Props> = ({ category }) => {
  return (
    <Stack  justifyContent={"center"} alignItems={"center"}>
      <div>
        <Image alt={category.title} src={category.img} />
      </div>
      <Typography color="text.primary">{category.title}</Typography>
    </Stack>
  );
};

export default Category;
