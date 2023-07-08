import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

function FAQ() {
    const theme =useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
<Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            The First Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, veritatis ducimus, 
                at asperiores iusto voluptatum, dicta sequi expedita fugiat aliquid voluptas voluptate
                 libero excepturi. Natus impedit dolor magni sint iste?
            </Typography>
        </AccordionDetails>
</Accordion>

<Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            The Second Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, veritatis ducimus, 
                at asperiores iusto voluptatum, dicta sequi expedita fugiat aliquid voluptas voluptate
                 libero excepturi. Natus impedit dolor magni sint iste?
            </Typography>
        </AccordionDetails>
</Accordion>

<Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            The third Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, veritatis ducimus, 
                at asperiores iusto voluptatum, dicta sequi expedita fugiat aliquid voluptas voluptate
                 libero excepturi. Natus impedit dolor magni sint iste?
            </Typography>
        </AccordionDetails>
</Accordion>

<Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
           The Fourth Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, veritatis ducimus, 
                at asperiores iusto voluptatum, dicta sequi expedita fugiat aliquid voluptas voluptate
                 libero excepturi. Natus impedit dolor magni sint iste?
            </Typography>
        </AccordionDetails>
</Accordion>

<Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            The Fifth Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, veritatis ducimus, 
                at asperiores iusto voluptatum, dicta sequi expedita fugiat aliquid voluptas voluptate
                 libero excepturi. Natus impedit dolor magni sint iste?
            </Typography>
        </AccordionDetails>
</Accordion>
    </Box>
  )
}

export default FAQ;