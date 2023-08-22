import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase, Typography, Avatar } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "/Images/logo.png";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            display={"flex"}
            p={2}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            {/* LOGO */}
            <Box display={"flex"} alignItems={"center"} sx={{ gap: "15px" }}>
                <Avatar src={Logo} sx={{ height: "70px", width: "70px" }}/>
                <Typography variant="h2" fontWeight={"500"} fontFamily={"cursive"} color={colors.grey[100]}>ADMINIS</Typography>
            </Box>

            <Box display={"flex"}>
                {/* Search Bar */}
                <Box
                    display={"flex"}
                    backgroundColor={colors.primary[400]}
                    borderRadius={"3px"}
                    width={"250px"}
                    height={"35px"}
                    alignItems={"center"}
                    padding={"5px"}
                    justifyContent={"space-between"}
                    marginRight={"20px"}
                >
                    <InputBase sx={{ ml: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>

                {/* Icons */}
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon aria-label="show notifications" />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
