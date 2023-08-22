import React from "react";
import { Box } from "@mui/material";
import Header from "../Global/Header";
import PieChart from "../../Charts/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="PIE CHART" subtitle="Simple Pie Chart" />
            <Box height={"60vh"} borderRadius={"15px"} overflow={"hidden"}>
                <PieChart />
            </Box>
        </Box>
    );
};

export default Pie;
