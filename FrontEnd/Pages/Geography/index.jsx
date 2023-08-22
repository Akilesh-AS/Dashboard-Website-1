import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../Global/Header";
import { tokens } from "../../theme";
import GeographyMap from "../../Charts/GeographyMap";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title={"GEOGRAPHY MAP"} subtitle={"Simple Geography Map"} />
            <Box height={"60vh"} p="30px" bgcolor={colors.primary[400]} borderRadius={"15px"} overflow={"hidden"}>
                <GeographyMap />
            </Box>
        </Box>
    );
};

export default Geography;
