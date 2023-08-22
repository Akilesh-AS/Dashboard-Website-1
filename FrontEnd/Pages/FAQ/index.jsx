import React from "react";
import Header from "../Global/Header";
import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQs" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[400]}>
                        How do I get started?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores similique provident nobis, sed odio
                        quaerat dolor ducimus pariatur eligendi. Perspiciatis
                        dignissimos aut veniam hic? Nostrum illo sapiente
                        similique aspernatur quas!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[400]}>
                        Important Questions?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores similique provident nobis, sed odio
                        quaerat dolor ducimus pariatur eligendi. Perspiciatis
                        dignissimos aut veniam hic? Nostrum illo sapiente
                        similique aspernatur quas!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[400]}>
                        Most Important Questions?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores similique provident nobis, sed odio
                        quaerat dolor ducimus pariatur eligendi. Perspiciatis
                        dignissimos aut veniam hic? Nostrum illo sapiente
                        similique aspernatur quas!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[400]}>
                        Most Favourite Questions?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores similique provident nobis, sed odio
                        quaerat dolor ducimus pariatur eligendi. Perspiciatis
                        dignissimos aut veniam hic? Nostrum illo sapiente
                        similique aspernatur quas!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[400]}>
                        Most Popular Questions?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores similique provident nobis, sed odio
                        quaerat dolor ducimus pariatur eligendi. Perspiciatis
                        dignissimos aut veniam hic? Nostrum illo sapiente
                        similique aspernatur quas!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[400]}>
                        It's really important?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores similique provident nobis, sed odio
                        quaerat dolor ducimus pariatur eligendi. Perspiciatis
                        dignissimos aut veniam hic? Nostrum illo sapiente
                        similique aspernatur quas!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
