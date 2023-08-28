import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AcccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandeMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../themes";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="0 20px 5px 20px">
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />

      <Accordion defaultExpanded>
        <AcccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AcccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            voluptatem obcaecati, aut nobis tempora excepturi cumque ullam
            neque.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AcccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final Question
          </Typography>
        </AcccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            voluptatem obcaecati, aut nobis tempora excepturi cumque ullam
            neque.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AcccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Favorite Question
          </Typography>
        </AcccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            voluptatem obcaecati, aut nobis tempora excepturi cumque ullam
            neque.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AcccordionSummary expandIcon={<ExpandeMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AcccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            voluptatem obcaecati, aut nobis tempora excepturi cumque ullam
            neque.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
