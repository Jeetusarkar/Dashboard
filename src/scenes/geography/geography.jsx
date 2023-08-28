import { useTheme } from "@mui/material";
import { tokens } from "../../themes";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="0 20px 20px 20px">
      <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />
      <Box
        height="70vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
