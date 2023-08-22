import React from "react";
import Header from "../Global/Header";
import { Box, Button, useTheme, IconButton, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../../Data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../Charts/LineChart";
import GeographyMap from "../../Charts/GeographyMap";
import BarChart from "../../Charts/BarChart";
import StatBox from "./StatBox";
import ProgressCircle from "./ProgressCircle";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px" pb={"30px"}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb="20px"
            >
                <Header
                    title="DASHBOARD"
                    subtitle="Welcome to your dashboard"
                />
                <Box>
                    <Button
                        sx={{
                            bgcolor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            p: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* Grid and Charts */}
            <Box
                display={"grid"}
                gridTemplateColumns={"repeat(12, 1fr)"}
                gridAutoRows={"140px"}
                gap={"20px"}
            >
                {/* Row 1 */}
                <Box
                    gridColumn={"span 3"}
                    bgcolor={colors.primary[400]}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius="5px"
                >
                    <StatBox
                        title="12,678"
                        subtitle="Email Send"
                        progress="0.75"
                        increase="+45%"
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn={"span 3"}
                    bgcolor={colors.primary[400]}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius="5px"
                >
                    <StatBox
                        title="431,225"
                        subtitle="Sales Obtained"
                        progress="0.5"
                        increase="+21%"
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn={"span 3"}
                    bgcolor={colors.primary[400]}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius="5px"
                >
                    <StatBox
                        title="32,441"
                        subtitle="New Clients"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn={"span 3"}
                    bgcolor={colors.primary[400]}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius="5px"
                >
                    <StatBox
                        title="1,325,134"
                        subtitle="Traffic Inbound"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>

                {/* Row 2 */}
                <Box
                    gridColumn={"span 8"}
                    gridRow={"span 2"}
                    bgcolor={colors.primary[400]}
                    borderRadius={"5px"}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        p="0 30px"
                        mt={"25px"}
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight={"600"}
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight={"bold"}
                                color={colors.greenAccent[500]}
                            >
                                $56,325,134
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: "26px",
                                        color: colors.greenAccent[500],
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box height={"250px"} mt={"-20px"} pb={"10px"}>
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                {/* Transactions */}
                <Box
                    gridColumn={"span 4"}
                    gridRow={"span 2"}
                    bgcolor={colors.primary[400]}
                    borderRadius={"5px"}
                    overflow={"auto"}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        borderBottom={
                            theme.palette.mode === "dark"
                                ? `4px solid ${colors.primary[500]}`
                                : `4px solid #fcfcfc`
                        }
                        alignItems={"center"}
                        color={colors.grey[100]}
                        p="15px"
                    >
                        <Typography
                            variant="h5"
                            fontWeight={"600"}
                            color={colors.grey[100]}
                        >
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, index) => (
                        <Box
                            key={`${transaction.txId}-${index}`}
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            borderColor={colors.primary[100]}
                            borderBottom={
                                theme.palette.mode === "dark"
                                    ? `4px solid ${colors.primary[500]}`
                                    : `4px solid #fcfcfc`
                            }
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    variant="h5"
                                    fontWeight={"600"}
                                    color={colors.greenAccent[500]}
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box>
                            <Box
                                bgcolor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Row 3 */}
                <Box
                    gridColumn={"span 4"}
                    gridRow={"span 2"}
                    bgcolor={colors.primary[400]}
                    borderRadius={"5px"}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight={"600"}>
                        Campaign
                    </Typography>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        flexDirection={"column"}
                        mt={"25px"}
                    >
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography textAlign={"center"}>
                            Includes extra misc expenditures and costs
                        </Typography>
                    </Box>
                </Box>
                {/*  */}
                <Box
                    gridColumn={"span 4"}
                    gridRow={"span 2"}
                    bgcolor={colors.primary[400]}
                    borderRadius={"5px"}
                >
                    <Typography
                        variant="h5"
                        fontWeight={"600"}
                        sx={{ p: "30px 30px 0 30px" }}
                    >
                        Sales Quantity
                    </Typography>
                    <Box height={"250px"} mt={"-20px"}>
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                {/*  */}
                <Box
                    gridColumn={"span 4"}
                    gridRow={"span 2"}
                    bgcolor={colors.primary[400]}
                    borderRadius={"5px"}
                    p="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight={"600"}
                        mb={"20px"}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box height={"200px"}>
                        <GeographyMap isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
