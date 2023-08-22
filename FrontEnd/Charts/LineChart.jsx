import React from "react";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../../Data/mockData";

const LineChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveLine
            data={data}
            theme={{
                background: isDashboard ? undefined : colors.primary[400],
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
                tooltip: {
                    container: {
                        color: colors.primary[500],
                    },
                },
            }}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            xFormat=" >-"
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "transportation",
                legendOffset: 36,
                legendPosition: "middle",
            }}
            axisLeft={{
                tickValues: isDashboard ? 5 : undefined,
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "count",
                legendOffset: -45,
                legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            colors={isDashboard ? { datum: "color" } : { scheme: "category10" }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 110,
                    translateY: 0,
                    itemsSpacing: 3,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 25,
                    itemOpacity: 0.75,
                    symbolSize: 14,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            motionConfig="wobbly"
        />
    );
};

export default LineChart;