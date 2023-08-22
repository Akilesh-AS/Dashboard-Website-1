import React from "react";
import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { mockPieData as data } from "../../Data/mockData";

const PieChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsivePie
            data={data}
            theme={{
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
                    legends: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                tooltip: {
                    container: {
                        color: colors.primary[500],
                    },
                },
                background: colors.primary[400],
            }}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeInnerRadiusOffset={7}
            activeOuterRadiusOffset={17}
            colors={{ scheme: "category10" }}
            borderWidth={1}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={15}
            arcLinkLabelsTextOffset={10}
            arcLinkLabelsTextColor={{ from: "color", modifiers: [] }}
            arcLinkLabelsDiagonalLength={28}
            arcLinkLabelsStraightLength={36}
            arcLinkLabelsThickness={3}
            arcLinkLabelsColor={{ from: "color" }}
            enableArcLabels={false}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
            }}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            fill={[
                {
                    match: {
                        id: "ruby",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "c",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "go",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "python",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "scala",
                    },
                    id: "lines",
                },
                {
                    match: {
                        id: "lisp",
                    },
                    id: "lines",
                },
                {
                    match: {
                        id: "elixir",
                    },
                    id: "lines",
                },
                {
                    match: {
                        id: "javascript",
                    },
                    id: "lines",
                },
            ]}
            motionConfig="wobbly"
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 57,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: colors.grey[100],
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 21,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: "#000",
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default PieChart;
