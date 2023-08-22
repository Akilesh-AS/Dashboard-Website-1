import React from "react";
import { Box } from "@mui/material";
import Header from "../Global/Header";
import LineChart from "../../Charts/LineChart";

const Line = () => {
    return (
        <Box m="20px">
            <Header title="LINE CHART" subtitle="Simple Line Chart" />
            <Box height={"60vh"} borderRadius={"15px"} overflow={"hidden"}>
                <LineChart />
            </Box>
        </Box>
    );
};

export default Line;
