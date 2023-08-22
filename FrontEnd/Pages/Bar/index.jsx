import React from "react";
import { Box } from "@mui/material";
import Header from "../Global/Header";
import BarChart from "../../Charts/BarChart";

const Bar = () => {
    return (
        <Box m="20px">
            <Header title={"BAR CHART"} subtitle={"Simple Bar Chart"}/>
            <Box height={"60vh"} borderRadius={"15px"} overflow={"hidden"}>
                <BarChart/>
            </Box>
        </Box>
    );
};

export default Bar;
